using Microsoft.Extensions.DependencyInjection;
using RIAPP.DataService.DomainService.Config;
using RIAppDemo.BLL.Utils;
using System;

namespace RIAppDemo.BLL.DataServices.Config
{
    public static class FolderBrowserServiceConfig
    {
        public static void AddFolderBrowser(this IServiceCollection services,
            Action<FolderBrowserServiceOptions> configure)
        {
            services.AddDomainService<FolderBrowserService>((options) =>
            {
                var svcOptions = new FolderBrowserServiceOptions();
                configure?.Invoke(svcOptions);

                options.UserFactory = svcOptions.GetUser;
            });

            services.AddScoped<IWarmUp>((sp => sp.GetRequiredService<FolderBrowserService>()));
        }
    }
}
