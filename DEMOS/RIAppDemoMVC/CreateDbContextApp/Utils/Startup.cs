using Microsoft.Extensions.DependencyInjection;
using RIAPP.DataService.Core.CodeGen;
using RIAPP.DataService.Core.Config;
using RIAPP.DataService.Utils;
using RIAppDemo.DAL;
using System;
using System.Security.Claims;

namespace RIAppDemo.Utils
{
    public static class Startup
    {
        public static void ConfigureServices(IServiceCollection services)
        {
            Func<IServiceProvider, ClaimsPrincipal> getCurrentUser = (sp) =>
            {
               var basicPrincipal = new ClaimsPrincipal(
               new ClaimsIdentity(
                   new Claim[] {
                        new Claim(ClaimTypes.NameIdentifier, "DUMMY_USER")},
                       "Basic"));

                return basicPrincipal;
            };

            services.AddSingleton<ICodeGenConfig, CodeGenConfig>();
            services.AddSingleton<ISerializer, Serializer>();
            services.AddDomainService<ADWDataService>((options) => {
                options.UserFactory = getCurrentUser;
            });
        }

    }
}