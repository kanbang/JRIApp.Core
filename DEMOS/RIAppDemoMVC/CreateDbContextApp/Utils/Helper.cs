using Microsoft.Extensions.DependencyInjection;
using System;

namespace RIAppDemo.Utils
{
    public static class Helper
    {
        public static R SetupAndRun<R>(Action<IServiceCollection> configure, Func<IServiceProvider, R> run)
        {
            var services = new ServiceCollection();
            configure(services);

            using (var rootProvider = services.BuildServiceProvider(true))
            {
                var result = rootProvider.ExecInScope<R>(run);
                return result;
            }
        }

        public static R ExecInScope<R>(this IServiceProvider rootProvider, Func<IServiceProvider, R> f)
        {
            IServiceScopeFactory scopeFactory = rootProvider.GetRequiredService<IServiceScopeFactory>();
            using (IServiceScope scope = scopeFactory.CreateScope())
            {
                var serviceProvider = scope.ServiceProvider;
                return f(serviceProvider);
            }
        }
    }
}
