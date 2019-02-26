﻿using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using RIAPP.DataService.DomainService.Config;
using RIAPP.DataService.DomainService.Security;
using RIAPP.DataService.Resources;
using RIAPP.DataService.Utils;
using RIAPP.DataService.DomainService.CodeGen;
using System;
using System.Security.Claims;
using System.Security.Principal;

namespace RIAPP.DataService.DomainService.Config
{
    public static class ServiceConfigureEx
    {
        public static void AddDomainService<TService>(this IServiceCollection services, 
            Action<ServiceOptions> configure)
         where TService : BaseDomainService
        {
            ServiceOptions options = new ServiceOptions(services);
            configure?.Invoke(options);

            var getSerializer = options.SerializerFactory ?? throw new ArgumentNullException(nameof(options.SerializerFactory), ErrorStrings.ERR_NO_SERIALIZER);
            var getUser = options.UserFactory ?? throw new ArgumentNullException(nameof(options.UserFactory), ErrorStrings.ERR_NO_USER);
            
            services.TryAddScoped<ISerializer>((sp) => getSerializer(sp));

            services.TryAddScoped<IPrincipal>((sp) => getUser(sp));

            services.TryAddScoped<ClaimsPrincipal>((sp) => getUser(sp));
            
            services.TryAddScoped<IAuthorizer<TService>, Authorizer<TService>>();

            services.TryAddScoped<IValueConverter<TService>, ValueConverter<TService>>();

            services.TryAddScoped<IDataHelper<TService>, DataHelper<TService>>();

            services.TryAddScoped<IValidationHelper<TService>, ValidationHelper<TService>>();

            services.TryAddScoped<IServiceOperationsHelper<TService>, ServiceOperationsHelper<TService>>();

            foreach (var descriptor in options.DataManagerRegister.Descriptors)
            {
                services.TryAddScoped(descriptor.ServiceType, descriptor.ImplementationType);
            }

            foreach (var descriptor in options.ValidatorRegister.Descriptors)
            {
                services.TryAddScoped(descriptor.ServiceType, descriptor.ImplementationType);
            }

            services.TryAddScoped<IDataManagerContainer<TService>>((sp) => {
                var serviceContainer = sp.GetRequiredService<IServiceContainer<TService>>();
                return new DataManagerContainer<TService>(serviceContainer, options.DataManagerRegister);
            });

            services.TryAddScoped<IValidatorContainer<TService>>((sp) => {
                var serviceContainer = sp.GetRequiredService<IServiceContainer<TService>>();
                return new ValidatorContainer<TService>(serviceContainer, options.ValidatorRegister);
            });

            services.TryAddScoped<IServiceContainer<TService>, ServiceContainer<TService>>();

            services.TryAddScoped<ICodeGenFactory<TService>, CodeGenFactory<TService>>();

            services.AddScoped<ICodeGenProviderFactory<TService>>((sp) => {
                return new XamlProviderFactory<TService>();
            });

            services.AddScoped<ICodeGenProviderFactory<TService>>((sp) => {
                return new TypeScriptProviderFactory<TService>(options.ClientTypes);
            });

            services.TryAddScoped<TService>((sp) => {
                var sc = sp.GetRequiredService<IServiceContainer<TService>>();
                return ActivatorUtilities.CreateInstance<TService>(sp, sc);
            });
        }
    }
}