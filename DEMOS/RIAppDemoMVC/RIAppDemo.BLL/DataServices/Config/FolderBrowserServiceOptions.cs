using RIAPP.DataService.Utils;
using System;
using System.Security.Claims;

namespace RIAppDemo.BLL
{
    public class FolderBrowserServiceOptions
    {
        public Func<IServiceProvider, ISerializer> GetSerializer { get; set; }
        public Func<IServiceProvider, ClaimsPrincipal> GetUser { get; set; }
    }
}
