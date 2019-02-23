using Microsoft.EntityFrameworkCore;
using RIAPP.DataService.DomainService.Attributes;
using RIAPP.DataService.DomainService.Security;
using RIAPP.DataService.DomainService.Types;
using RIAppDemo.DAL.EF;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace RIAppDemo.BLL.DataServices.DataManagers
{
    public class CustomerAddressDM : AdWDataManager<CustomerAddress>
    {
        [Query]
        public async Task<QueryResult<CustomerAddress>> ReadCustomerAddress()
        {
            var res = PerformQuery(null);
            return new QueryResult<CustomerAddress>(await res.Data.ToListAsync(), totalCount: null);
        }

        [Query]
        public async Task<QueryResult<CustomerAddress>> ReadAddressForCustomers(int[] custIDs)
        {
            int? totalCount = null;
            var res = await DB.CustomerAddress.Where(ca => custIDs.Contains(ca.CustomerId)).ToListAsync();
            return new QueryResult<CustomerAddress>(res, totalCount);
        }

        [AuthorizeRoles(new[] {ADMINS_ROLE})]
        public override void Insert(CustomerAddress customeraddress)
        {
            DB.CustomerAddress.Add(customeraddress);
        }

        [AuthorizeRoles(new[] {ADMINS_ROLE})]
        public override void Update(CustomerAddress customeraddress)
        {
            customeraddress.ModifiedDate = DateTime.Now;
            var orig = GetOriginal();
            var entry =DB.CustomerAddress.Attach(customeraddress);
            entry.OriginalValues.SetValues(orig);
        }

        [AuthorizeRoles(new[] {ADMINS_ROLE})]
        public override void Delete(CustomerAddress customeraddress)
        {
            DB.CustomerAddress.Attach(customeraddress);
            DB.CustomerAddress.Remove(customeraddress);
        }
    }
}