using Microsoft.EntityFrameworkCore;
using RIAPP.DataService.DomainService.Interfaces;
using RIAPP.DataService.DomainService.Types;
using RIAPP.DataService.EFCore;
using RIAppDemo.DAL.EF;
using System;

namespace RIAppDemo.DAL
{
    public class ADWDataService : EFDomainService<AdventureWorksLT2012Context>
    {

        public ADWDataService(): this((options) =>
        {
            options.Serializer = new Serializer();
            options.User = new System.Security.Principal.GenericPrincipal(new System.Security.Principal.GenericIdentity("dummy"), new string[0]);
        })
        {
        }

        public ADWDataService(Action<IServiceOptions> args) : base(args)
        {
        }

        protected override AdventureWorksLT2012Context CreateDataContext()
        {
            DbContextOptionsBuilder<AdventureWorksLT2012Context> optionsBuilder = new DbContextOptionsBuilder<AdventureWorksLT2012Context>();
            optionsBuilder.UseSqlServer("Server=(local);Database=AdventureWorksLT2012;Integrated Security=False;User ID=sa;Password=Kolumb88");
            return new AdventureWorksLT2012Context(optionsBuilder.Options);
        }

        public DesignTimeMetadata GetDraftMetadata()
        {
            return this.GetDesignTimeMetadata(true);
        }
    }
}
