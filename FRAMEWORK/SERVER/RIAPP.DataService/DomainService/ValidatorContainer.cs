﻿using RIAPP.DataService.DomainService.Config;
using System;

namespace RIAPP.DataService.DomainService
{
    public class ValidatorContainer<TService> : IValidatorContainer<TService>
        where TService: BaseDomainService
    {
        private readonly IServiceContainer<TService> _serviceContainer;
        private readonly IValidatorRegister _validatorRegister;

        public ValidatorContainer(IServiceContainer<TService> serviceContainer, IValidatorRegister validatorRegister)
        {
            _serviceContainer = serviceContainer;
            _validatorRegister = validatorRegister;
        }

        public IValidator GetValidator(Type modelType)
        {
            ServiceTypeDescriptor descriptor;
            if (_validatorRegister.TryGetDescriptor(modelType, out descriptor))
                return (IValidator)_serviceContainer.GetService(descriptor.ServiceType);
            return null;
        }

        public IValidator<TModel> GetValidator<TModel>()
        {
            var res = GetValidator(typeof(TModel));
            return (IValidator<TModel>)res;
        }
    }
}