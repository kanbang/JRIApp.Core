using System;

namespace RIAPP.DataService.DomainService.CodeGen.Attributes
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Struct | AttributeTargets.Enum, Inherited = false)]
    public class CommentAttribute : Attribute
    {
        public string Text { get; set; }
    }
}