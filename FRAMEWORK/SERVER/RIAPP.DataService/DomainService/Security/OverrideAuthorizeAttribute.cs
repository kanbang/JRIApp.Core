using Microsoft.AspNetCore.Authorization;
using System;

namespace RIAPP.DataService.DomainService.Security
{
    /// <summary>
    ///     This atribute assignes roles for the method or datamanager which override the roles assigned in the dataservice or
    ///     the other authorize attributes
    /// </summary>
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Class, Inherited = false)]
    public class OverrideAuthorizeAttribute : AuthorizeAttribute
    {
        public OverrideAuthorizeAttribute(): base()
        {
        }

        public OverrideAuthorizeAttribute(string policy) : base(policy)
        {
        }
    }
}