using System;
using System.Security.Claims;

namespace RIAPP.DataService.DomainService.Security
{
    public class UserProvider : IUserProvider
    {
        private readonly Func<ClaimsPrincipal> _userFactory;

        public UserProvider(Func<ClaimsPrincipal> userFactory)
        {
            _userFactory = userFactory;
        }

        public ClaimsPrincipal User => _userFactory();
    }
}
