using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc;
using RIAppDemo.BLL.DataServices;
using System.Threading.Tasks;

namespace RIAppDemo.ViewComponents
{
    public class ProductCategoryViewComponent : ViewComponent
    {
        private readonly RIAppDemoServiceEF _domainService;

        public ProductCategoryViewComponent(RIAppDemoServiceEF domainService)
        {
            _domainService = domainService;
        }

        public async Task<HtmlString> InvokeAsync()
        {
            RIAPP.DataService.Core.Types.QueryResponse info = await _domainService.GetQueryData("ProductCategory", "ReadProductCategory");
            return new HtmlString(_domainService.Serializer.Serialize(info));
        }
    }
}
