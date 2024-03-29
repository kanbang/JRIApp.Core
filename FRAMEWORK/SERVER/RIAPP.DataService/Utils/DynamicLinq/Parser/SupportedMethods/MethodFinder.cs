﻿using System.Collections.Generic;
using System.Linq.Expressions;
using System.Reflection;

namespace System.Linq.Dynamic.Core.Parser.SupportedMethods
{
    internal class MethodFinder
    {
        private readonly ParsingConfig _parsingConfig;

        /// <summary>
        /// Get an instance
        /// </summary>
        /// <param name="parsingConfig"></param>
        public MethodFinder(ParsingConfig parsingConfig)
        {
            _parsingConfig = parsingConfig;
        }

        public bool ContainsMethod(Type type, string methodName, bool staticAccess, Expression instance, ref Expression[] args)
        {
            // NOTE: `instance` is not passed by ref in the method signature by design. The ContainsMethod should not change the instance.
            // However, args by reference is required for backward compatibility (removing "ref" will break some tests)

            return FindMethod(type, methodName, staticAccess, ref instance, ref args, out _) == 1;
        }

        public int FindMethod(Type type, string methodName, bool staticAccess, ref Expression instance, ref Expression[] args, out MethodBase method)
        {
            foreach (Type t in SelfAndBaseTypes(type))
            {
                MethodInfo[] methods = t.GetTypeInfo().DeclaredMethods.Where(x => (x.IsStatic || !staticAccess) && x.Name.ToLowerInvariant() == methodName.ToLowerInvariant()).ToArray();
                int count = FindBestMethod(methods, ref args, out method);
                if (count != 0)
                {
                    return count;
                }
            }

            if (instance != null)
            {
                // TRY to solve with registered extension methods 
                if (_parsingConfig.CustomTypeProvider.GetExtensionMethods().TryGetValue(type, out List<MethodInfo> methods))
                {
                    List<Expression> argsList = args.ToList();
                    argsList.Insert(0, instance);
                    Expression[] extensionMethodArgs = argsList.ToArray();
                    int count = FindBestMethod(methods.Cast<MethodBase>(), ref extensionMethodArgs, out method);
                    if (count != 0)
                    {
                        instance = null;
                        args = extensionMethodArgs;
                        return count;
                    }
                }
            }

            method = null;
            return 0;
        }

        public int FindBestMethod(IEnumerable<MethodBase> methods, ref Expression[] args, out MethodBase method)
        {
            // passing args by reference is now required with the params array support.

            Expression[] inlineArgs = args;

            MethodData[] applicable = methods
                .Select(m => new MethodData { MethodBase = m, Parameters = m.GetParameters() })
                .Where(m => IsApplicable(m, inlineArgs))
                .ToArray();

            if (applicable.Length > 1)
            {
                applicable = applicable.Where(m => applicable.All(n => m == n || IsBetterThan(inlineArgs, m, n))).ToArray();
            }

            if (args.Length == 2 && applicable.Length > 1 && (args[0].Type == typeof(Guid?) || args[1].Type == typeof(Guid?)))
            {
                applicable = applicable.Take(1).ToArray();
            }

            if (applicable.Length == 1)
            {
                MethodData md = applicable[0];
                method = md.MethodBase;
                args = md.Args;
            }
            else
            {
                method = null;
            }

            return applicable.Length;
        }

        public int FindIndexer(Type type, Expression[] args, out MethodBase method)
        {
            foreach (Type t in SelfAndBaseTypes(type))
            {
                MemberInfo[] members = t.GetDefaultMembers();
                if (members.Length != 0)
                {
                    IEnumerable<MethodBase> methods = members.OfType<PropertyInfo>().
                    Select(p => (MethodBase)p.GetMethod);

                    int count = FindBestMethod(methods, ref args, out method);
                    if (count != 0)
                    {
                        return count;
                    }
                }
            }

            method = null;
            return 0;
        }

        private bool IsApplicable(MethodData method, Expression[] args)
        {
            bool isParamArray = method.Parameters.Length > 0 && method.Parameters.Last().IsDefined(typeof(ParamArrayAttribute), false);

            // if !paramArray, the number of parameter must be equal
            // if paramArray, the last parameter is optional
            if ((!isParamArray && method.Parameters.Length != args.Length) ||
                (isParamArray && method.Parameters.Length - 1 > args.Length))
            {
                return false;
            }

            Expression[] promotedArgs = new Expression[method.Parameters.Length];
            for (int i = 0; i < method.Parameters.Length; i++)
            {
                if (isParamArray && i == method.Parameters.Length - 1)
                {
                    if (method.Parameters.Length == args.Length + 1
                        || (method.Parameters.Length == args.Length && args[i] is ConstantExpression constantExpression && constantExpression.Value == null))
                    {
                        promotedArgs[promotedArgs.Length - 1] = Expression.Constant(null, method.Parameters.Last().ParameterType);
                    }
                    else if (method.Parameters.Length == args.Length && method.Parameters.Last().ParameterType == args.Last().Type)
                    {
                        promotedArgs[promotedArgs.Length - 1] = args.Last();
                    }
                    else
                    {
                        Type paramType = method.Parameters.Last().ParameterType;
                        Type paramElementType = paramType.GetElementType();

                        List<Expression> arrayInitializerExpressions = new List<Expression>();

                        for (int j = method.Parameters.Length - 1; j < args.Length; j++)
                        {
                            Expression promoted = _parsingConfig.ExpressionPromoter.Promote(args[j], paramElementType, false, method.MethodBase.DeclaringType != typeof(IEnumerableSignatures));
                            if (promoted == null)
                            {
                                return false;
                            }

                            arrayInitializerExpressions.Add(promoted);
                        }

                        NewArrayExpression paramExpression = Expression.NewArrayInit(paramElementType, arrayInitializerExpressions);

                        promotedArgs[promotedArgs.Length - 1] = paramExpression;
                    }
                }
                else
                {
                    ParameterInfo pi = method.Parameters[i];
                    if (pi.IsOut)
                    {
                        return false;
                    }

                    Expression promoted = _parsingConfig.ExpressionPromoter.Promote(args[i], pi.ParameterType, false, method.MethodBase.DeclaringType != typeof(IEnumerableSignatures));
                    if (promoted == null)
                    {
                        return false;
                    }
                    promotedArgs[i] = promoted;
                }
            }

            method.Args = promotedArgs;
            return true;
        }

        private bool IsBetterThan(Expression[] args, MethodData first, MethodData second)
        {
            bool better = false;
            for (int i = 0; i < args.Length; i++)
            {
                CompareConversionType result = CompareConversions(args[i].Type, first.Parameters[i].ParameterType, second.Parameters[i].ParameterType);

                // If second is better, return false
                if (result == CompareConversionType.Second)
                {
                    return false;
                }

                // If first is better, return true
                if (result == CompareConversionType.First)
                {
                    return true;
                }

                // If both are same, just set better to true and continue
                if (result == CompareConversionType.Both)
                {
                    better = true;
                }
            }

            return better;
        }

        // Return "First" if s -> t1 is a better conversion than s -> t2
        // Return "Second" if s -> t2 is a better conversion than s -> t1
        // Return "Both" if neither conversion is better
        private CompareConversionType CompareConversions(Type source, Type first, Type second)
        {
            if (first == second)
            {
                return CompareConversionType.Both;
            }
            if (source == first)
            {
                return CompareConversionType.First;
            }
            if (source == second)
            {
                return CompareConversionType.Second;
            }

            bool firstIsCompatibleWithSecond = TypeHelper.IsCompatibleWith(first, second);
            bool secondIsCompatibleWithFirst = TypeHelper.IsCompatibleWith(second, first);

            if (firstIsCompatibleWithSecond && !secondIsCompatibleWithFirst)
            {
                return CompareConversionType.First;
            }
            if (secondIsCompatibleWithFirst && !firstIsCompatibleWithSecond)
            {
                return CompareConversionType.Second;
            }

            if (TypeHelper.IsSignedIntegralType(first) && TypeHelper.IsUnsignedIntegralType(second))
            {
                return CompareConversionType.First;
            }
            if (TypeHelper.IsSignedIntegralType(second) && TypeHelper.IsUnsignedIntegralType(first))
            {
                return CompareConversionType.Second;
            }

            return CompareConversionType.Both;
        }

        private IEnumerable<Type> SelfAndBaseTypes(Type type)
        {
            if (type.GetTypeInfo().IsInterface)
            {
                List<Type> types = new List<Type>();
                AddInterface(types, type);
                return types;
            }
            return SelfAndBaseClasses(type);
        }

        private IEnumerable<Type> SelfAndBaseClasses(Type type)
        {
            while (type != null)
            {
                yield return type;
                type = type.GetTypeInfo().BaseType;
            }
        }

        private void AddInterface(List<Type> types, Type type)
        {
            if (!types.Contains(type))
            {
                types.Add(type);
                foreach (Type t in type.GetInterfaces())
                {
                    AddInterface(types, t);
                }
            }
        }
    }
}
