using Microsoft.EntityFrameworkCore;
using RIAPP.DataService.Annotations;
using RIAPP.DataService.Core.Types;
using RIAppDemo.BLL.Models;
using RIAppDemo.DAL.EF;
using System.Linq;
using System.Threading.Tasks;

namespace RIAppDemo.BLL.DataServices.DataManagers
{
    public class LookUpProductDM : AdWDataManager<LookUpProduct>
    {
        [Query]
        public async Task<QueryResult<LookUpProduct>> ReadProductLookUp()
        {
            int? totalCount = 0;
            var res = PerformQuery<Product>((countQuery) => countQuery.CountAsync());
            var products = await res.Data.Select(p => new LookUpProduct { ProductId = p.ProductId, Name = p.Name }).ToListAsync();
            if (products.Any())
            {
                totalCount = await res.CountAsync();
            }
            return new QueryResult<LookUpProduct>(products, totalCount);
        }
    }
}