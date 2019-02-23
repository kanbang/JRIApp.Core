using RIAPP.DataService.DomainService.Attributes;

namespace RIAppDemo.BLL.Models
{
    [TypeName("ITestLookUpProduct")]
    public class LookUpProduct
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
    }
}