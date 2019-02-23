using Microsoft.AspNetCore.Mvc;
using RIAppDemo.Models;

namespace RIAppDemo.Controllers
{
    public class TemplatesController : Controller
    {
        [ResponseCache(Duration = 600, Location = ResponseCacheLocation.Any, VaryByQueryKeys = new string[] { "name" })]
        public ActionResult Download(string name)
        {
            return View(name);
        }

        [ResponseCache(Duration = 600, Location = ResponseCacheLocation.Any)]
        public ActionResult SPADemoTemplate1()
        {
            return View(new SPATemplate());
        }

        [ResponseCache(Duration = 600, Location = ResponseCacheLocation.Any)]
        public ActionResult SPADemoTemplate2()
        {
            return View(new SPATemplate());
        }

        [ResponseCache(Duration = 600, Location = ResponseCacheLocation.Any)]
        public ActionResult SPADemoTemplate3()
        {
            return View(new SPATemplate());
        }
    }
}