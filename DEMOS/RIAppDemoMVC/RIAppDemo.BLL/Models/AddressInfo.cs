using RIAPP.DataService.DomainService.CodeGen.Attributes;

namespace RIAppDemo.BLL.Models
{
    [TypeName("IAddressInfo2")]
    public class AddressInfo
    {
        public int AddressId { get; set; }
        public string AddressLine1 { get; set; }
        public string City { get; set; }
        public string StateProvince { get; set; }
        public string CountryRegion { get; set; }
    }
}