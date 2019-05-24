using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using ValidationException = System.ComponentModel.DataAnnotations.ValidationException;

namespace RIAPP.DataService.EFCore.Utils
{
    public static class EntityValidateHelper
    {
        /// <summary>
        /// Validates entities by its DataAnnotations attributes
        /// this is probably redundant, because the DataService has its own metadata and the changes are validated against it
        /// </summary>
        /// <typeparam name="TDB"></typeparam>
        /// <param name="domainService"></param>
        public static void ValidateEntities<TDB>(this EFDomainService<TDB> domainService)
             where TDB : DbContext
        {
            var entries = from e in domainService.DB.ChangeTracker.Entries()
                          where e.State == EntityState.Added
                              || e.State == EntityState.Modified
                          select e;

            var items = new Dictionary<object, object>();
            var sb = new StringBuilder();

            foreach (var entry in entries)
            {
                var entity = entry.Entity;
                var validationContext = new ValidationContext(entity, domainService.ServiceContainer.ServiceProvider, items);
                var results = new List<ValidationResult>();

                if (Validator.TryValidateObject(entity, validationContext, results, true) == false)
                {
                    foreach (var result in results)
                    {
                        if (result != ValidationResult.Success)
                        {
                            if (sb.Length > 0)
                                sb.AppendLine();
                            sb.AppendFormat("Entity of type \"{0}\" in state \"{1}\" has validation errors:",
                            entity.GetType().Name, entry.State);
                            sb.AppendLine(result.ErrorMessage);
                        }
                    }
                }
            }

            if (sb.Length > 0)
                throw new ValidationException(sb.ToString());
        }
    }
}
