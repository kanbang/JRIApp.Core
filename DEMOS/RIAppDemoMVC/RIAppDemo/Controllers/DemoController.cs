using Microsoft.AspNetCore.Mvc;
using RIAppDemo.Models;
using System.Diagnostics;

namespace RIAppDemo.Controllers
{
    public class DemoController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult DataGridDemo()
        {
            return View();
        }

        public ActionResult ManyToManyDemo()
        {
            return View();
        }

        public ActionResult MasterDetailDemo()
        {
            return View();
        }

        public ActionResult CollectionsDemo()
        {
            return View();
        }

        public ActionResult BindingsDemo()
        {
            return View();
        }

        public ActionResult FilesDemo()
        {
            return View();
        }

        public ActionResult TreeDemo()
        {
            return View();
        }

        public ActionResult JsonDBDemo()
        {
            return View();
        }

        public ActionResult SPADemo()
        {
            return View();
        }

        public ActionResult ReactDemo()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

    }
}