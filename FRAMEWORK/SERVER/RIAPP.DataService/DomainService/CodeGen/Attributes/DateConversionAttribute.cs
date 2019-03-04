using System;
using RIAPP.DataService.DomainService.Types;

namespace RIAPP.DataService.DomainService.CodeGen.Attributes
{
    [AttributeUsage(AttributeTargets.Parameter)]
    public class DateConversionAttribute : Attribute
    {
        public DateConversionAttribute()
        {
            dateConversion = DateConversion.None;
        }

        public DateConversion dateConversion { get; set; }
    }
}