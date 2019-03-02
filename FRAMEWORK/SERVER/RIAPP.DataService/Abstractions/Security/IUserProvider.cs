using System.Security.Claims;

namespace RIAPP.DataService.DomainService.Security
{
    public interface IUserProvider
    {
        ClaimsPrincipal User { get; }
    }
}
