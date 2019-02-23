using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc;
using RIAppDemo.BLL.DataServices;
using System.Threading.Tasks;

namespace RIAppDemo.ViewComponents
{
    public class PermissionsViewComponent : ViewComponent
    {
        private readonly RIAppDemoServiceEF _domainService;

        public PermissionsViewComponent(RIAppDemoServiceEF domainService)
        {
            _domainService = domainService;
        }

        public async Task<HtmlString> InvokeAsync()
        {
            var info = await _domainService.ServiceGetPermissions(); 
            return new HtmlString(_domainService.Serializer.Serialize(info));
        }
    }
}
