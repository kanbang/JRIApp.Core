using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using RIAppDemo.BLL.Utils;
using System;

namespace RIAppDemo.Services
{
    public class PathService : IPathService
    {
        public static void InitEnvironmentPaths(IHostingEnvironment env)
        {
            string appRoot = env.ContentRootPath;
            AppDomain.CurrentDomain.SetData("AppRootDirectory", appRoot);
            AppDomain.CurrentDomain.SetData("DataDirectory", System.IO.Path.Combine(appRoot, "App_Data"));
        }

        readonly IConfiguration _configuration;
            
        public PathService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string AppRoot
        {
            get
            {
                return AppDomain.CurrentDomain.GetData("AppRootDirectory").ToString();
            }
        }

        public string DataDirectory
        {
            get
            {
                return AppDomain.CurrentDomain.GetData("DataDirectory").ToString();
            }
        }

        public string ConfigFolder
        {
            get
            {
                return _configuration[$"AppSettings:FOLDER_BROWSER_PATH"];
            }
        }
    }
}
