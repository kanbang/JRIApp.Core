﻿using System.Collections;
using System.Collections.Generic;
using System.Globalization;

namespace System.Linq.Dynamic.Core
{
    /// <summary>
    /// The result of a call to a <see cref="DynamicQueryableExtensions"/>.GroupByMany() overload.
    /// </summary>
    public class GroupResult
    {
        /// <summary>
        /// The key value of the group.
        /// </summary>
        public dynamic Key { get; internal set; }

        /// <summary>
        /// The number of resulting elements in the group.
        /// </summary>
        public int Count { get; internal set; }

        /// <summary>
        /// The resulting elements in the group.
        /// </summary>
        public IEnumerable Items { get; internal set; }

        /// <summary>
        /// The resulting subgroups in the group.
        /// </summary>
        public IEnumerable<GroupResult> Subgroups { get; internal set; }

        /// <summary>
        /// Returns a <see cref="string" /> showing the key of the group and the number of items in the group.
        /// </summary>
        /// <returns>
        /// A <see cref="string" /> that represents this instance.
        /// </returns>
        public override string ToString()
        {
            return string.Format(CultureInfo.CurrentCulture, "{0} ({1})", ((object)Key).ToString(), Count);
        }
    }
}