﻿using JetBrains.Annotations;
using System.Linq.Dynamic.Core.Parser;
using System.Linq.Dynamic.Core.Util;
using System.Linq.Dynamic.Core.Validation;
using System.Linq.Expressions;

namespace System.Linq.Dynamic.Core
{
    /// <summary>
    /// Helper class to convert an expression into an LambdaExpression
    /// </summary>
    public static class DynamicExpressionParser
    {
        /// <summary>
        /// Parses an expression into a LambdaExpression.
        /// </summary>
        /// <param name="parsingConfig">The Configuration for the parsing.</param>
        /// <param name="createParameterCtor">if set to <c>true</c> then also create a constructor for all the parameters. Note that this doesn't work for Linq-to-Database entities.</param>
        /// <param name="resultType">Type of the result. If not specified, it will be generated dynamically.</param>
        /// <param name="expression">The expression.</param>
        /// <param name="values">An object array that contains zero or more objects which are used as replacement values.</param>
        /// <returns>The generated <see cref="LambdaExpression"/></returns>
        [PublicAPI]
        public static LambdaExpression ParseLambda([CanBeNull] ParsingConfig parsingConfig, bool createParameterCtor, [CanBeNull] Type resultType, [NotNull] string expression, params object[] values)
        {
            Check.NotEmpty(expression, nameof(expression));

            ExpressionParser parser = new ExpressionParser(new ParameterExpression[0], expression, values, parsingConfig);

            return Expression.Lambda(parser.Parse(resultType, createParameterCtor));
        }

        /// <summary>
        /// Parses an expression into a Typed Expression.
        /// </summary>
        /// <typeparam name="TResult">The type of the result.</typeparam>
        /// <param name="parsingConfig">The Configuration for the parsing.</param>
        /// <param name="createParameterCtor">if set to <c>true</c> then also create a constructor for all the parameters. Note that this doesn't work for Linq-to-Database entities.</param>
        /// <param name="expression">The expression.</param>
        /// <param name="values">An object array that contains zero or more objects which are used as replacement values.</param>
        /// <returns>The generated <see cref="Expression"/></returns>
        [PublicAPI]
        public static Expression<Func<TResult>> ParseLambda<TResult>([CanBeNull] ParsingConfig parsingConfig, bool createParameterCtor, [NotNull] string expression, params object[] values)
        {
            return (Expression<Func<TResult>>)ParseLambda(parsingConfig, createParameterCtor, typeof(TResult), expression, values);
        }

        /// <summary>
        /// Parses an expression into a LambdaExpression.
        /// </summary>
        /// <param name="parsingConfig">The Configuration for the parsing.</param>
        /// <param name="createParameterCtor">if set to <c>true</c> then also create a constructor for all the parameters. Note that this doesn't work for Linq-to-Database entities.</param>
        /// <param name="parameters">A array from ParameterExpressions.</param>
        /// <param name="resultType">Type of the result. If not specified, it will be generated dynamically.</param>
        /// <param name="expression">The expression.</param>
        /// <param name="values">An object array that contains zero or more objects which are used as replacement values.</param>
        /// <returns>The generated <see cref="LambdaExpression"/></returns>
        [PublicAPI]
        public static LambdaExpression ParseLambda([CanBeNull] ParsingConfig parsingConfig, bool createParameterCtor, [NotNull] ParameterExpression[] parameters, [CanBeNull] Type resultType, [NotNull] string expression, params object[] values)
        {
            Check.NotNull(parameters, nameof(parameters));
            Check.HasNoNulls(parameters, nameof(parameters));
            Check.NotEmpty(expression, nameof(expression));

            ExpressionParser parser = new ExpressionParser(parameters, expression, values, parsingConfig);

            Expression parsedExpression = parser.Parse(resultType, createParameterCtor);

            if (parsingConfig != null && parsingConfig.RenameParameterExpression && parameters.Length == 1)
            {
                ParameterExpressionRenamer renamer = new ParameterExpressionRenamer(parser.LastLambdaItName);
                parsedExpression = renamer.Rename(parsedExpression, out ParameterExpression newParameterExpression);

                return Expression.Lambda(parsedExpression, new[] { newParameterExpression });
            }
            else
            {
                return Expression.Lambda(parsedExpression, parameters);
            }
        }

        /// <summary>
        /// Parses an expression into a Typed Expression.
        /// </summary>
        /// <typeparam name="TResult">The type of the result.</typeparam>
        /// <param name="parsingConfig">The Configuration for the parsing.</param>
        /// <param name="createParameterCtor">if set to <c>true</c> then also create a constructor for all the parameters. Note that this doesn't work for Linq-to-Database entities.</param>
        /// <param name="parameters">A array from ParameterExpressions.</param>
        /// <param name="expression">The expression.</param>
        /// <param name="values">An object array that contains zero or more objects which are used as replacement values.</param>
        /// <returns>The generated <see cref="Expression"/></returns>
        [PublicAPI]
        public static Expression<Func<TResult>> ParseLambda<TResult>([CanBeNull] ParsingConfig parsingConfig, bool createParameterCtor, [NotNull] ParameterExpression[] parameters, [NotNull] string expression, params object[] values)
        {
            return (Expression<Func<TResult>>)ParseLambda(parsingConfig, createParameterCtor, parameters, typeof(TResult), expression, values);
        }

        /// <summary>
        /// Parses an expression into a LambdaExpression.
        /// </summary>
        /// <param name="createParameterCtor">if set to <c>true</c> then also create a constructor for all the parameters. Note that this doesn't work for Linq-to-Database entities.</param>
        /// <param name="itType">The main type from the dynamic class expression.</param>
        /// <param name="resultType">Type of the result. If not specified, it will be generated dynamically.</param>
        /// <param name="expression">The expression.</param>
        /// <param name="values">An object array that contains zero or more objects which are used as replacement values.</param>
        /// <returns>The generated <see cref="LambdaExpression"/></returns>
        [PublicAPI]
        public static LambdaExpression ParseLambda(bool createParameterCtor, [NotNull] Type itType, [CanBeNull] Type resultType, string expression, params object[] values)
        {
            Check.NotNull(itType, nameof(itType));
            Check.NotEmpty(expression, nameof(expression));

            return ParseLambda(createParameterCtor, new[] { ParameterExpressionHelper.CreateParameterExpression(itType, string.Empty) }, resultType, expression, values);
        }

        /// <summary>
        /// Parses an expression into a Typed Expression.
        /// </summary>
        /// <typeparam name="T">The `it`-Type.</typeparam>
        /// <typeparam name="TResult">The type of the result.</typeparam>
        /// <param name="parsingConfig">The Configuration for the parsing.</param>
        /// <param name="createParameterCtor">if set to <c>true</c> then also create a constructor for all the parameters. Note that this doesn't work for Linq-to-Database entities.</param>
        /// <param name="expression">The expression.</param>
        /// <param name="values">An object array that contains zero or more objects which are used as replacement values.</param>
        /// <returns>The generated <see cref="Expression"/></returns>
        [PublicAPI]
        public static Expression<Func<T, TResult>> ParseLambda<T, TResult>([CanBeNull] ParsingConfig parsingConfig, bool createParameterCtor, [NotNull] string expression, params object[] values)
        {
            Check.NotEmpty(expression, nameof(expression));

            return (Expression<Func<T, TResult>>)ParseLambda(parsingConfig, createParameterCtor, new[] { ParameterExpressionHelper.CreateParameterExpression(typeof(T), string.Empty, parsingConfig?.RenameEmptyParameterExpressionNames ?? false) }, typeof(TResult), expression, values);
        }

        /// <summary>
        /// Parses an expression into a LambdaExpression. (Also create a constructor for all the parameters. Note that this doesn't work for Linq-to-Database entities.)
        /// </summary>
        /// <param name="parsingConfig">The Configuration for the parsing.</param>
        /// <param name="resultType">Type of the result. If not specified, it will be generated dynamically.</param>
        /// <param name="expression">The expression.</param>
        /// <param name="values">An object array that contains zero or more objects which are used as replacement values.</param>
        /// <returns>The generated <see cref="LambdaExpression"/></returns>
        [PublicAPI]
        public static LambdaExpression ParseLambda([CanBeNull] ParsingConfig parsingConfig, [CanBeNull] Type resultType, [NotNull] string expression, params object[] values)
        {
            return ParseLambda(parsingConfig, true, resultType, expression, values);
        }

        /// <summary>
        /// Parses an expression into a LambdaExpression. (Also create a constructor for all the parameters. Note that this doesn't work for Linq-to-Database entities.)
        /// </summary>
        /// <param name="resultType">Type of the result. If not specified, it will be generated dynamically.</param>
        /// <param name="expression">The expression.</param>
        /// <param name="values">An object array that contains zero or more objects which are used as replacement values.</param>
        /// <returns>The generated <see cref="LambdaExpression"/></returns>
        [PublicAPI]
        public static LambdaExpression ParseLambda([CanBeNull] Type resultType, [NotNull] string expression, params object[] values)
        {
            Check.NotEmpty(expression, nameof(expression));

            return ParseLambda(null, true, resultType, expression, values);
        }

        /// <summary>
        /// Parses an expression into a LambdaExpression. (Also create a constructor for all the parameters. Note that this doesn't work for Linq-to-Database entities.)
        /// </summary>
        /// <param name="itType">The main type from the dynamic class expression.</param>
        /// <param name="resultType">Type of the result. If not specified, it will be generated dynamically.</param>
        /// <param name="expression">The expression.</param>
        /// <param name="values">An object array that contains zero or more objects which are used as replacement values.</param>
        /// <returns>The generated <see cref="LambdaExpression"/></returns>
        [PublicAPI]
        public static LambdaExpression ParseLambda([NotNull] Type itType, [CanBeNull] Type resultType, string expression, params object[] values)
        {
            return ParseLambda(true, itType, resultType, expression, values);
        }

        /// <summary>
        /// Parses an expression into a LambdaExpression. (Also create a constructor for all the parameters. Note that this doesn't work for Linq-to-Database entities.)
        /// </summary>
        /// <param name="parsingConfig">The Configuration for the parsing.</param>
        /// <param name="itType">The main type from the dynamic class expression.</param>
        /// <param name="resultType">Type of the result. If not specified, it will be generated dynamically.</param>
        /// <param name="expression">The expression.</param>
        /// <param name="values">An object array that contains zero or more objects which are used as replacement values.</param>
        /// <returns>The generated <see cref="LambdaExpression"/></returns>
        [PublicAPI]
        public static LambdaExpression ParseLambda([CanBeNull] ParsingConfig parsingConfig, [NotNull] Type itType, [CanBeNull] Type resultType, string expression, params object[] values)
        {
            return ParseLambda(parsingConfig, true, itType, resultType, expression, values);
        }

        /// <summary>
        /// Parses an expression into a LambdaExpression.
        /// </summary>
        /// <param name="parsingConfig">The Configuration for the parsing.</param>
        /// <param name="createParameterCtor">if set to <c>true</c> then also create a constructor for all the parameters. Note that this doesn't work for Linq-to-Database entities.</param>
        /// <param name="itType">The main type from the dynamic class expression.</param>
        /// <param name="resultType">Type of the result. If not specified, it will be generated dynamically.</param>
        /// <param name="expression">The expression.</param>
        /// <param name="values">An object array that contains zero or more objects which are used as replacement values.</param>
        /// <returns>The generated <see cref="LambdaExpression"/></returns>
        [PublicAPI]
        public static LambdaExpression ParseLambda([CanBeNull] ParsingConfig parsingConfig, bool createParameterCtor, [NotNull] Type itType, [CanBeNull] Type resultType, string expression, params object[] values)
        {
            Check.NotNull(itType, nameof(itType));
            Check.NotEmpty(expression, nameof(expression));

            return ParseLambda(parsingConfig, createParameterCtor, new[] { ParameterExpressionHelper.CreateParameterExpression(itType, string.Empty, parsingConfig?.RenameEmptyParameterExpressionNames ?? false) }, resultType, expression, values);
        }

        /// <summary>
        /// Parses an expression into a LambdaExpression. (Also create a constructor for all the parameters. Note that this doesn't work for Linq-to-Database entities.)
        /// </summary>
        /// <param name="parameters">A array from ParameterExpressions.</param>
        /// <param name="resultType">Type of the result. If not specified, it will be generated dynamically.</param>
        /// <param name="expression">The expression.</param>
        /// <param name="values">An object array that contains zero or more objects which are used as replacement values.</param>
        /// <returns>The generated <see cref="LambdaExpression"/></returns>
        [PublicAPI]
        public static LambdaExpression ParseLambda([NotNull] ParameterExpression[] parameters, [CanBeNull] Type resultType, string expression, params object[] values)
        {
            return ParseLambda(null, true, parameters, resultType, expression, values);
        }

        /// <summary>
        /// Parses an expression into a LambdaExpression. (Also create a constructor for all the parameters. Note that this doesn't work for Linq-to-Database entities.)
        /// </summary>
        /// <param name="parsingConfig">The Configuration for the parsing.</param>
        /// <param name="parameters">A array from ParameterExpressions.</param>
        /// <param name="resultType">Type of the result. If not specified, it will be generated dynamically.</param>
        /// <param name="expression">The expression.</param>
        /// <param name="values">An object array that contains zero or more objects which are used as replacement values.</param>
        /// <returns>The generated <see cref="LambdaExpression"/></returns>
        [PublicAPI]
        public static LambdaExpression ParseLambda([CanBeNull] ParsingConfig parsingConfig, [NotNull] ParameterExpression[] parameters, [CanBeNull] Type resultType, string expression, params object[] values)
        {
            return ParseLambda(parsingConfig, true, parameters, resultType, expression, values);
        }

        /// <summary>
        /// Parses an expression into a LambdaExpression.
        /// </summary>
        /// <param name="createParameterCtor">if set to <c>true</c> then also create a constructor for all the parameters. Note that this doesn't work for Linq-to-Database entities.</param>
        /// <param name="parameters">A array from ParameterExpressions.</param>
        /// <param name="resultType">Type of the result. If not specified, it will be generated dynamically.</param>
        /// <param name="expression">The expression.</param>
        /// <param name="values">An object array that contains zero or more objects which are used as replacement values.</param>
        /// <returns>The generated <see cref="LambdaExpression"/></returns>
        [PublicAPI]
        public static LambdaExpression ParseLambda(bool createParameterCtor, [NotNull] ParameterExpression[] parameters, [CanBeNull] Type resultType, [NotNull] string expression, params object[] values)
        {
            return ParseLambda(null, createParameterCtor, parameters, resultType, expression, values);
        }
    }
}
