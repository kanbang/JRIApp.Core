using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using RIAppDemo.BLL.Models;
using RIAppDemo.BLL.Utils;
using RIAppDemo.DAL.EF;
using System;

namespace RIAppDemo.BLL.DataServices.Config
{
    public static class RIAppDemoServiceEFConfig
    {
        public static void AddRIAppDemoService(this IServiceCollection services, 
           Action<RIAppDemoServiceEFOptions> configure)
        {
            services.AddEFDomainService<RIAppDemoServiceEF, AdventureWorksLT2012Context>((options) => {
                options.ClientTypes = () => new[] { typeof(TestModel), typeof(KeyVal), typeof(StrKeyVal), typeof(RadioVal), typeof(HistoryItem), typeof(TestEnum2) };

                ValidatorConfig.RegisterValidators(options.ValidatorRegister);
                DataManagerConfig.RegisterDataManagers(options.DataManagerRegister);

                var svcOptions = new RIAppDemoServiceEFOptions();
                configure?.Invoke(svcOptions);

                options.UserFactory = svcOptions.GetUser;
                options.SerializerFactory = svcOptions.GetSerializer;

                string connString = svcOptions.ConnectionString ?? throw new ArgumentNullException(nameof(svcOptions.ConnectionString));

                services.AddDbContextPool<AdventureWorksLT2012Context>((dbOptions) => {
                    dbOptions.UseSqlServer(connString, (sqlOptions) => {
                        sqlOptions.UseRowNumberForPaging();
                    });
                }, poolSize: 32);
            });

            services.AddScoped<IWarmUp>((sp=>sp.GetRequiredService<RIAppDemoServiceEF>()));
        }
    }
}
