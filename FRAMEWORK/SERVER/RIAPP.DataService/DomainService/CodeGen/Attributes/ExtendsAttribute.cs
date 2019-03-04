using System;

namespace RIAPP.DataService.DomainService.CodeGen.Attributes
{
    [AttributeUsage(AttributeTargets.Class, Inherited = false)]
    public class ExtendsAttribute : Attribute
    {
        public ExtendsAttribute()
        {
            InterfaceNames = new string[0];
        }


        public string[] InterfaceNames { get; set; }
    }
}