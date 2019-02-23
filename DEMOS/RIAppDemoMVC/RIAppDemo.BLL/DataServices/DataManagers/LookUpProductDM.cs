﻿using Microsoft.EntityFrameworkCore;
using RIAPP.DataService.DomainService.Attributes;
using RIAPP.DataService.DomainService.Types;
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
            var res = PerformQuery<Product>((countQuery) => countQuery.CountAsync());
            int? totalCount = await res.Count;
            var products = await res.Data.Select(p => new LookUpProduct { ProductId = p.ProductId, Name = p.Name }).ToListAsync();
            return new QueryResult<LookUpProduct>(products, totalCount);
        }
    }
}