using RIAPP.DataService.DomainService.CodeGen.Attributes;

namespace RIAppDemo.BLL.Models
{
    [TypeName("ITestLookUpProduct")]
    public class LookUpProduct
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
    }
}