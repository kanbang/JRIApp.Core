﻿using System.Linq.Dynamic.Core.Validation;
using System.Reflection;

namespace System.Linq.Dynamic.Core
{
    /// <summary>
    /// Default implementation.
    /// </summary>
    /// <seealso cref="IQueryableAnalyzer" />
    public class DefaultQueryableAnalyzer : IQueryableAnalyzer
    {
        /// <inheritdoc cref="IQueryableAnalyzer.SupportsLinqToObjects"/>
        public bool SupportsLinqToObjects(IQueryable query, IQueryProvider provider = null)
        {
            Check.NotNull(query, nameof(query));
            provider = provider ?? query.Provider;

            Type providerType = provider.GetType();
            Type baseType = providerType.GetTypeInfo().BaseType;
            bool isLinqToObjects = baseType == typeof(EnumerableQuery);

            if (!isLinqToObjects)
            {
                // Support for https://github.com/StefH/QueryInterceptor.Core, version 1.0.1 and up
                if (providerType.Name.StartsWith("QueryTranslatorProvider"))
                {
                    try
                    {
                        PropertyInfo property = providerType.GetProperty("OriginalProvider");
                        if (property != null)
                        {
                            IQueryProvider originalProvider = property.GetValue(provider, null) as IQueryProvider;
                            return originalProvider != null && SupportsLinqToObjects(query, originalProvider);
                        }

                        return SupportsLinqToObjects(query);
                    }
                    catch
                    {
                        return false;
                    }
                }

                // Support for https://github.com/scottksmith95/LINQKit ExpandableQuery
                if (providerType.Name.StartsWith("ExpandableQuery"))
                {
                    try
                    {
                        PropertyInfo property = query.GetType().GetProperty("InnerQuery", BindingFlags.NonPublic | BindingFlags.Instance);
                        if (property != null)
                        {
                            IQueryable innerQuery = property.GetValue(query, null) as IQueryable;
                            return innerQuery != null && SupportsLinqToObjects(innerQuery, provider);
                        }

                        return SupportsLinqToObjects(query);
                    }
                    catch
                    {
                        return false;
                    }
                }
            }

            return isLinqToObjects;
        }
    }
}
