﻿using System;

namespace RIAPP.DataService.DomainService.Attributes
{
    [AttributeUsage(AttributeTargets.Class, Inherited = false)]
    public class ListAttribute : Attribute
    {
        /// <summary>
        ///     The name of the typed list that will be generated on the client
        /// </summary>
        public string ListName { get; set; }
    }
}