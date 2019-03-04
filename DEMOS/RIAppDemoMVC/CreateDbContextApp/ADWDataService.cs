using Microsoft.EntityFrameworkCore;
using RIAPP.DataService.DomainService;
using RIAPP.DataService.DomainService.Metadata;
using RIAPP.DataService.EFCore;
using RIAppDemo.DAL.EF;

namespace RIAppDemo.DAL
{
    public class ADWDataService : EFDomainService<AdventureWorksLT2012Context>
    {

        public ADWDataService(IServiceContainer serviceContainer) 
            : base(serviceContainer)
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
