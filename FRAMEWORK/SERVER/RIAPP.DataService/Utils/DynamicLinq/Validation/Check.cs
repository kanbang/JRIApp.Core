﻿// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using JetBrains.Annotations;
using System.Collections.Generic;
using System.Diagnostics;
// using System.Reflection;

// Copied from https://github.com/aspnet/EntityFramework/blob/dev/src/Shared/Check.cs
namespace System.Linq.Dynamic.Core.Validation
{
    [DebuggerStepThrough]
    internal static class Check
    {
        public static T Condition<T>([ValidatedNotNull, NoEnumeration] T value, [ValidatedNotNull, NotNull] Predicate<T> condition, [InvokerParameterName, ValidatedNotNull, NotNull] string parameterName)
        {
            NotNull(condition, nameof(condition));

            if (!condition(value))
            {
                NotEmpty(parameterName, nameof(parameterName));

                throw new ArgumentOutOfRangeException(parameterName);
            }

            return value;
        }

        [ContractAnnotation("value:null => halt")]
        public static T NotNull<T>([ValidatedNotNull, NoEnumeration] T value, [InvokerParameterName, ValidatedNotNull, NotNull] string parameterName)
        {
            if (ReferenceEquals(value, null))
            {
                NotEmpty(parameterName, nameof(parameterName));

                throw new ArgumentNullException(parameterName);
            }

            return value;
        }

        [ContractAnnotation("value:null => halt")]
        public static T NotNull<T>(
            [NoEnumeration] T value,
            [InvokerParameterName, ValidatedNotNull, NotNull] string parameterName,
            [ValidatedNotNull, NotNull] string propertyName)
        {
            if (ReferenceEquals(value, null))
            {
                NotEmpty(parameterName, nameof(parameterName));
                NotEmpty(propertyName, nameof(propertyName));

                throw new ArgumentException(CoreStrings.ArgumentPropertyNull(propertyName, parameterName));
            }

            return value;
        }

        //[ContractAnnotation("value:null => halt")]
        //public static IList<T> NotEmpty<T>(IList<T> value, [InvokerParameterName, ValidatedNotNull, NotNull] string parameterName)
        //{
        //    NotNull(value, parameterName);

        //    if (value.Count == 0)
        //    {
        //        NotEmpty(parameterName, nameof(parameterName));

        //        throw new ArgumentException(CoreStrings.CollectionArgumentIsEmpty(parameterName));
        //    }

        //    return value;
        //}

        [ContractAnnotation("value:null => halt")]
        public static string NotEmpty(string value, [InvokerParameterName, ValidatedNotNull, NotNull] string parameterName)
        {
            Exception e = null;
            if (ReferenceEquals(value, null))
            {
                e = new ArgumentNullException(parameterName);
            }
            else if (value.Trim().Length == 0)
            {
                e = new ArgumentException(CoreStrings.ArgumentIsEmpty(parameterName));
            }

            if (e != null)
            {
                NotEmpty(parameterName, nameof(parameterName));

                throw e;
            }

            return value;
        }

        //public static string NullButNotEmpty(string value, [InvokerParameterName, ValidatedNotNull, NotNull] string parameterName)
        //{
        //    if (!ReferenceEquals(value, null) && value.Length == 0)
        //    {
        //        NotEmpty(parameterName, nameof(parameterName));

        //        throw new ArgumentException(CoreStrings.ArgumentIsEmpty(parameterName));
        //    }

        //    return value;
        //}

        public static IList<T> HasNoNulls<T>(IList<T> value, [InvokerParameterName, ValidatedNotNull, NotNull] string parameterName)
            where T : class
        {
            NotNull(value, parameterName);

            if (value.Any(e => e == null))
            {
                NotEmpty(parameterName, nameof(parameterName));

                throw new ArgumentException(parameterName);
            }

            return value;
        }

        //public static Type ValidEntityType(Type value, [InvokerParameterName, ValidatedNotNull, NotNull] string parameterName)
        //{
        //    if (!value.GetTypeInfo().IsClass)
        //    {
        //        NotEmpty(parameterName, nameof(parameterName));

        //        throw new ArgumentException(CoreStrings.InvalidEntityType(value, parameterName));
        //    }

        //    return value;
        //}
    }
}
