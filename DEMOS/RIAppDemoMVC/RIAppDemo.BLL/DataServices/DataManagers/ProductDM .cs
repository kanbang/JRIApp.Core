using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using RIAPP.DataService.DomainService.Attributes;
using RIAPP.DataService.DomainService.Query;
using RIAPP.DataService.DomainService.Security;
using RIAPP.DataService.DomainService.Types;
using RIAppDemo.DAL.EF;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace RIAppDemo.BLL.DataServices.DataManagers
{
    public class ProductDM : AdWDataManager<Product>
    {
        [Query]
        public async Task<QueryResult<Product>> ReadProduct(int[] param1, string param2)
        {
            // var queryInfo = RequestContext.CurrentQueryInfo;
            var productsResult = PerformQuery((countQuery) => countQuery.CountAsync());
            var productsList = await productsResult.Data.ToListAsync();
            int? totalCount = await productsResult.Count;

            var productIDs = productsList.Select(p => p.ProductId).Distinct().ToArray();
            var queryResult = new QueryResult<Product>(productsList, totalCount);

            var subResult = new SubResult
            {
                dbSetName = "SalesOrderDetail",
                Result = await DB.SalesOrderDetail.AsNoTracking().Where(sod => productIDs.Contains(sod.ProductId)).ToListAsync()
            };

            // include related SalesOrderDetails with the products in the same query result
            queryResult.subResults.Add(subResult);
            // example of returning out of band information and use it on the client (of it can be more useful than it)
            queryResult.extraInfo = new {test = "ReadProduct Extra Info: " + DateTime.Now.ToString("dd.MM.yyyy HH:mm:ss")};
            return queryResult;
        }

        [Query]
        public async Task<QueryResult<Product>> ReadProductByIds(int[] productIDs)
        {
            var res = await DB.Product.Where(ca => productIDs.Contains(ca.ProductId)).ToListAsync();
            return new QueryResult<Product>(res, totalCount: null);
        }

        [AuthorizeRoles(new[] { ADMINS_ROLE })]
        public override void Insert(Product product)
        {
            DB.Product.Add(product);
        }

        [AuthorizeRoles(new[] { ADMINS_ROLE })]
        [Authorize(Policy = "RequireUpdateRights")]
        public override void Update(Product product)
        {
            product.ModifiedDate = DateTime.Now;
            var orig = GetOriginal();
            var entry = DB.Product.Attach(product);
            /*
                var dbValues = entry.GetDatabaseValues();
                entry.OriginalValues.SetValues(dbValues);
            */
            entry.OriginalValues.SetValues(orig);
        }

        [AuthorizeRoles(new[] { ADMINS_ROLE })]
        public override void Delete(Product product)
        {
            DB.Product.Attach(product);
            DB.Product.Remove(product);
        }

        [Refresh]
        public async Task<Product> RefreshProduct(RefreshInfo refreshInfo)
        {
            var query = DataService.GetRefreshedEntityQuery(DB.Product, refreshInfo);
            return await query.SingleAsync();
        }
    }
}