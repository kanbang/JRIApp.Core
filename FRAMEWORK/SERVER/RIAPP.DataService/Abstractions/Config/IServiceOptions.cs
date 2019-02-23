using Microsoft.Extensions.DependencyInjection;
using RIAPP.DataService.Utils;
using System;
using System.Collections.Generic;
using System.Security.Claims;

namespace RIAPP.DataService.DomainService.Config
{
    public interface IServiceOptions
    {
        Func<IServiceProvider, ISerializer> SerializerFactory { get;  }

        Func<IServiceProvider, ClaimsPrincipal> UserFactory { get; }

        Func<IEnumerable<Type>> ClientTypes { get; }

        IValidatorRegister ValidatorRegister { get; }

        IDataManagerRegister DataManagerRegister { get; }

        IServiceCollection Services { get; }
    }
}