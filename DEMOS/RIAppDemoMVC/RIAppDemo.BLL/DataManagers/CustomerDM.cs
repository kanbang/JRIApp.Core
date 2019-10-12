﻿using Microsoft.EntityFrameworkCore;
using RIAPP.DataService.Annotations;
using RIAPP.DataService.Core.Query;
using RIAPP.DataService.Core.Security;
using RIAPP.DataService.Core.Types;
using RIAPP.DataService.EFCore.Utils;
using RIAppDemo.DAL.EF;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace RIAppDemo.BLL.DataServices.DataManagers
{
    public class CustomerDM : AdWDataManager<Customer>
    {
        [Query]
        public async Task<QueryResult<Customer>> ReadCustomer(bool? includeNav)
        {
            var customers = DB.Customer as IQueryable<Customer>;
            var queryInfo = this.GetCurrentQueryInfo();
            // AddressCount does not exists in Database (we calculate it), so it is needed to sort it manually
            var addressCountSortItem = queryInfo.sortInfo.sortItems.FirstOrDefault(sortItem => sortItem.fieldName == "AddressCount");

            if (addressCountSortItem != null)
            {
                queryInfo.sortInfo.sortItems.Remove(addressCountSortItem);
                if (addressCountSortItem.sortOrder == SortOrder.ASC)
                    customers = customers.OrderBy(c => c.CustomerAddress.Count());
                else
                    customers = customers.OrderByDescending(c => c.CustomerAddress.Count());
            }

            int? totalCount = queryInfo.pageIndex == 0 ? 0 : (int?)null;
            // perform query
            var customersResult = this.PerformQuery(customers.AsNoTracking(), queryInfo.pageIndex == 0 ? (countQuery) => countQuery.CountAsync() : (Func<IQueryable<Customer>, Task<int>>)null);
            var customersList = await customersResult.Data.ToListAsync();
            // only execute total counting if we got full page size of rows, preventing unneeded database call to count total
            if (customersList.Any())
            {
                int cnt = customersList.Count;
                if (cnt < queryInfo.pageSize)
                {
                    totalCount = cnt;
                }
                else
                {
                    totalCount = totalCount = await customersResult.CountAsync();
                }
            }

            var queryRes = new QueryResult<Customer>(customersList, totalCount);

            if (includeNav == true)
            {
                int[] customerIDs = customersList.Select(c => c.CustomerId).ToArray();
                var customerAddress = await DB.CustomerAddress.AsNoTracking().Where(ca => customerIDs.Contains(ca.CustomerId)).ToListAsync();
                int[] addressIDs = customerAddress.Select(ca => ca.AddressId).ToArray();

                var subResult1 = new SubResult
                {
                    dbSetName = "CustomerAddress",
                    Result = customerAddress
                };

                var subResult2 = new SubResult
                {
                    dbSetName = "Address",
                    Result = await DB.Address.AsNoTracking().Where(adr => addressIDs.Contains(adr.AddressId)).ToListAsync()
                };

                // since we have loaded customer addresses - update server side calculated field: AddressCount 
                // (which i have introduced for testing purposes as a server calculated field)
                var addressLookUp = customerAddress.ToLookup(ca => ca.CustomerId);
                customersList.ForEach(customer => {
                    customer.AddressCount = addressLookUp[customer.CustomerId].Count();
                });

                // return two subresults with the query results
                queryRes.subResults.Add(subResult1);
                queryRes.subResults.Add(subResult2);
            }

            return queryRes;
        }

        [AuthorizeRoles(new[] { ADMINS_ROLE })]
        public override void Insert(Customer customer)
        {
            customer.PasswordHash = Guid.NewGuid().ToString();
            customer.PasswordSalt = new string(Guid.NewGuid().ToString().ToCharArray().Take(10).ToArray());
            DB.Customer.Add(customer);
        }

        [AuthorizeRoles(new[] { ADMINS_ROLE })]
        public override void Update(Customer customer)
        {
            customer.ModifiedDate = DateTime.Now;
            var orig = this.GetOriginal<Customer>();
            var entry = DB.Customer.Attach(customer);
           
            // Using custom extension method - This is a workaround to update owned entities https://github.com/aspnet/EntityFrameworkCore/issues/13890
            entry.SetOriginalValues(orig);
       

            /*
            entry.OriginalValues.SetValues(orig);
            var _entry2 = DB.Entry<CustomerName>(customer.CustomerName);
            var _entry3 = DB.Entry<CustomerContact>(customer.CustomerName.Contact);
            _entry2.OriginalValues.SetValues(orig.CustomerName);
            _entry3.OriginalValues.SetValues(orig.CustomerName.Contact);
            */
        }

        [AuthorizeRoles(new[] { ADMINS_ROLE })]
        public override void Delete(Customer customer)
        {
            DB.Customer.Attach(customer);
            DB.Customer.Remove(customer);
        }

        [Refresh]
        public async Task<Customer> RefreshCustomer(RefreshInfo refreshInfo)
        {
            var query = this.GetRefreshedEntityQuery(DB.Customer, refreshInfo);
            return await query.SingleAsync();
        }
    }
}