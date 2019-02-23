using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc;
using RIAppDemo.BLL.DataServices;
using System.Threading.Tasks;

namespace RIAppDemo.ViewComponents
{
    public class ProductModelViewComponent : ViewComponent
    {
        private readonly RIAppDemoServiceEF _domainService;

        public ProductModelViewComponent(RIAppDemoServiceEF domainService)
        {
            _domainService = domainService;
        }

        public async Task<HtmlString> InvokeAsync()
        {
            var info = await _domainService.GetQueryData("ProductModel", "ReadProductModel");
            return new HtmlString(_domainService.Serializer.Serialize(info));
        }
    }
}
