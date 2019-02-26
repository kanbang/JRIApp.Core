﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using RIAPP.DataService.DomainService;
using RIAPP.DataService.DomainService.Attributes;
using RIAPP.DataService.DomainService.Exceptions;
using RIAPP.DataService.DomainService.Metadata;
using RIAPP.DataService.DomainService.Query;
using RIAPP.DataService.DomainService.Security;
using RIAPP.DataService.DomainService.Types;
using RIAPP.DataService.EFCore;
using RIAppDemo.BLL.Models;
using RIAppDemo.BLL.Utils;
using RIAppDemo.DAL.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ResourceHelper = RIAppDemo.BLL.Utils.ResourceHelper;

namespace RIAppDemo.BLL.DataServices
{
    [Authorize]
    public class RIAppDemoServiceEF : EFDomainService<AdventureWorksLT2012Context>, IWarmUp
    {
        internal const string USERS_ROLE = "Users";
        internal const string ADMINS_ROLE = "Admins";

        // store last diffgram here
        private string _diffGramm;
        private readonly ILogger<RIAppDemoServiceEF> _logger;

        public RIAppDemoServiceEF(IServiceContainer serviceContainer, 
            AdventureWorksLT2012Context db, 
            ILogger<RIAppDemoServiceEF> logger)
            : base(serviceContainer, db)
        {
            _logger = logger;
        }
        
        /// <summary>
        /// Initialize metadata and make the first use of DbContext
        /// </summary>
        /// <returns></returns>
        async  Task IWarmUp.WarmUp()
        {
            var metadata = this.ServiceGetMetadata();
            var data = await this.GetQueryData("ProductCategory", "ReadProductCategory");
        }

        string IWarmUp.Name
        {
            get { return "RIAppDemoServiceEF"; }
        }

        /*
        protected override AdventureWorksLT2012Context CreateDataContext()
        {
            var connection = _connectionFactory.GetRIAppDemoConnectionString();
            DbContextOptionsBuilder<AdventureWorksLT2012Context> optionsBuilder = new DbContextOptionsBuilder<AdventureWorksLT2012Context>();
            optionsBuilder.UseSqlServer(connection, (options)=> {
                // to support SQL SERVER 2008
                // options.UseRowNumberForPaging();
            });
            return new AdventureWorksLT2012Context(optionsBuilder.Options);
        }
        */
        protected override DesignTimeMetadata GetDesignTimeMetadata(bool isDraft)
        {
            if (isDraft)
            {
                return base.GetDesignTimeMetadata(true);
            }
            //  first the uncorrected metadata was saved into xml file and then edited 
            return DesignTimeMetadata.FromXML(ResourceHelper.GetResourceString("RIAppDemo.BLL.Metadata.MainDemo.xml"));
        }

        /// <summary>
        ///     here can be tracked changes to the entities
        ///     for example: product entity changes is tracked and can be seen here
        /// </summary>
        /// <param name="dbSetName"></param>
        /// <param name="changeType"></param>
        /// <param name="diffgram"></param>
        protected override void OnTrackChange(string dbSetName, ChangeType changeType, string diffgram)
        {
            //you can set a breakpoint here and to examine diffgram
            _diffGramm = diffgram;
        }

        /// <summary>
        ///     Error logging could be implemented here
        /// </summary>
        /// <param name="ex"></param>
        protected override void OnError(Exception ex)
        {
            var msg = "";
            if (ex != null)
                msg = ex.GetFullMessage();
            _logger.LogError(ex, msg);
        }


        #region ProductModel
        [AllowAnonymous]
        [Query]
        public async Task<QueryResult<ProductModel>> ReadProductModel()
        {
            IEnumerable<ProductModel> res = await this.PerformQuery(DB.ProductModel.AsNoTracking()).ToListAsync();
            return new QueryResult<ProductModel>(res, totalCount: null);
        }

        #endregion

        #region ProductCategory
        /// <summary>
        /// An example how to return query result of another type as entity
        /// Query attribute can contain information about the EntityType or DbSetName or both
        /// </summary>
        /// <returns>Query result</returns>
        [AllowAnonymous]
        [Query(DbSetName = "ProductCategory", EntityType = typeof(ProductCategory))]
        public async Task<QueryResult<object>> ReadProductCategory()
        {
            // we return anonymous type from query instead of real entities
            // the framework does not care about the real type of the returned entities as long as they contain all the fields
            var query = this.PerformQuery(DB.ProductCategory.AsNoTracking());
            var res = await query.Select(p =>
            new
            {
                ProductCategoryId = p.ProductCategoryId,
                ParentProductCategoryId = p.ParentProductCategoryId,
                Name = p.Name,
                Rowguid = p.Rowguid,
                ModifiedDate = p.ModifiedDate
            }).ToListAsync();
            return new QueryResult<object>(res, totalCount: null);
        }
        #endregion

        [Query]
        public async Task<QueryResult<SalesInfo>> ReadSalesInfo()
        {
            var queryInfo = this.GetCurrentQueryInfo();
            var startsWithVal = queryInfo.filterInfo.filterItems[0].values.First().TrimEnd('%');
            var res = DB.Customer.AsNoTracking().Where(c => c.SalesPerson.StartsWith(startsWithVal))
                    .Select(s => s.SalesPerson)
                    .Distinct()
                    .OrderBy(s => s)
                    .Select(s => new SalesInfo {SalesPerson = s});

            var resPage = await res.Skip(queryInfo.pageIndex * queryInfo.pageSize).Take(queryInfo.pageSize).ToListAsync();

            return new QueryResult<SalesInfo>(resPage, await res.CountAsync());
        }

        [Query]
        public async Task<QueryResult<AddressInfo>> ReadAddressInfo()
        {
            var res = await this.PerformQuery(DB.Address.AsNoTracking())
                   .Select(a => new AddressInfo
                   {
                       AddressId = a.AddressId,
                       AddressLine1 = a.AddressLine1,
                       City = a.City,
                       CountryRegion = a.CountryRegion
                   }).ToListAsync();

            return new QueryResult<AddressInfo>(res, totalCount: null);
        }

        /// <summary>
        ///     if you return a Task<SomeType>
        ///     result from the Invoke method then it will be asynchronous
        ///     if instead you return SomeType type then the method will be executed synchronously
        /// </summary>
        /// <param name="param1"></param>
        /// <param name="param2"></param>
        /// <returns></returns>
        [AllowAnonymous]
        [Invoke]
        public string TestInvoke(byte[] param1, string param2)
        {
            var ipAddressService = this.ServiceContainer.GetRequiredService<IHostAddrService>();
            string userIPaddress = ipAddressService.GetIPAddress();

            var sb = new StringBuilder();

            Array.ForEach(param1, item =>
            {
                if (sb.Length > 0)
                    sb.Append(", ");
                sb.Append(item);
            });

            /*
            int rand = (new Random(DateTime.Now.Millisecond)).Next(0, 999);
            if ((rand % 3) == 0)
                throw new Exception("Error generated randomly for testing purposes. Don't worry! Try again.");
            */

            return string.Format("TestInvoke method invoked with<br/><br/><b>param1:</b> {0}<br/> <b>param2:</b> {1} User IP: {2}",
                    sb, param2, userIPaddress);
        }

        [Invoke]
        public void TestComplexInvoke(AddressInfo info, KeyVal[] keys)
        {
            var ipAddressService = this.ServiceContainer.GetService<IHostAddrService>();
            string userIPaddress = ipAddressService.GetIPAddress();
            //p.s. do something with info and keys
        }

        #region CustomerJSON
        /// <summary>
        /// Contrived example of an entity which has JSON data in one of its fields
        /// just to show how to work with these entities on the client side
        /// </summary>
        /// <returns></returns>
        [Query]
        public async Task<QueryResult<CustomerJSON>> ReadCustomerJSON()
        {
            var customers = DB.Customer.AsNoTracking().Where(c=>c.CustomerAddress.Any()) as IQueryable<Customer>;
            var queryInfo = this.GetCurrentQueryInfo();
            // calculate totalCount only when we fetch first page (to speed up query)
            var custQueryResult = this.PerformQuery(customers, queryInfo.pageIndex == 0 ? (countQuery) => countQuery.CountAsync() : (Func<IQueryable<Customer>, Task<int>>)null);
            var custList = await custQueryResult.Data.ToListAsync();
            int? totalCount = await custQueryResult.Count;

            var custAddressesList = await (from cust in custQueryResult.Data
                                 from custAddr in cust.CustomerAddress
                                 join addr in DB.Address on custAddr.AddressId equals addr.AddressId
                                 select new
                                 {
                                     CustomerId = custAddr.CustomerId,
                                     ID = addr.AddressId,
                                     Line1 = addr.AddressLine1,
                                     Line2 = addr.AddressLine2,
                                     City = addr.City,
                                     Region = addr.CountryRegion
                                 }).ToListAsync();

            var custAddressesLookup = custAddressesList.ToLookup((addr) => addr.CustomerId);

            // since i create JSON Data myself because there's no entity in db
            // which has json data in its fields
            var res = custList.Select(c => new CustomerJSON() {
                CustomerId = c.CustomerId,
                Rowguid = c.Rowguid,
                // serialize to json
                Data = this.Serializer.Serialize(new
                {
                    Title = c.Title,
                    CompanyName = c.CompanyName,
                    SalesPerson = c.SalesPerson,
                    ModifiedDate = c.ModifiedDate,
                    Level1 = new
                    {
                        FirstName = c.CustomerName.FirstName,
                        MiddleName = c.CustomerName.MiddleName,
                        LastName = c.CustomerName.LastName,
                        // another level of nesting to make it more complex
                        Level2 = new
                        {
                            EmailAddress = c.CustomerName.Contact.EmailAddress,
                            Phone = c.CustomerName.Contact.Phone

                        }
                    },
                    Addresses = custAddressesLookup[c.CustomerId].Select(ca => new { ca.Line1, ca.Line2, ca.City, ca.Region})
                    })
                });

            return new QueryResult<CustomerJSON>(res, totalCount);
        }

        [AuthorizeRoles(new[] { ADMINS_ROLE })]
        [Insert]
        public void InsertCustomerJSON(CustomerJSON customer)
        {
            //make insert here
        }

        [AuthorizeRoles(new[] { ADMINS_ROLE })]
        [Update]
        public void UpdateCustomerJSON(CustomerJSON customer)
        {
            //make update here
        }

        [AuthorizeRoles(new[] { ADMINS_ROLE })]
        [Delete]
        public void DeleteCustomerJSON(CustomerJSON customer)
        {
            var entity = DB.Customer.Where(c => c.CustomerId == customer.CustomerId).Single();
            DB.Customer.Remove(entity);
        }

        #endregion

        #region Address

        [Query]
        public async Task<QueryResult<Address>> ReadAddress()
        {
            var res = await this.PerformQuery(DB.Address.AsNoTracking()).ToListAsync();
            return new QueryResult<Address>(res, totalCount: null);
        }

        [Query]
        public async Task<QueryResult<Address>> ReadAddressByIds(int[] addressIDs)
        {
            var res = await DB.Address.AsNoTracking().Where(ca => addressIDs.Contains(ca.AddressId)).ToListAsync();
            return new QueryResult<Address>(res, totalCount: null);
        }

        [Validate]
        public IEnumerable<ValidationErrorInfo> ValidateAddress(Address address, string[] modifiedField)
        {
            return Enumerable.Empty<ValidationErrorInfo>();
        }

        [AuthorizeRoles(new[] {ADMINS_ROLE})]
        [Insert]
        public void InsertAddress(Address address)
        {
            DB.Address.Add(address);
        }

        [AuthorizeRoles(new[] {ADMINS_ROLE})]
        [Update]
        public void UpdateAddress(Address address)
        {
            address.ModifiedDate = DateTime.Now;
            var orig = this.GetOriginal<Address>();
            var entry = DB.Address.Attach(address);
            /*
            var dbValues = entry.GetDatabaseValues();
            entry.OriginalValues.SetValues(dbValues);
            */
            entry.OriginalValues.SetValues(orig);
        }

        [AuthorizeRoles(new[] {ADMINS_ROLE})]
        [Delete]
        public void DeleteAddress(Address address)
        {
            DB.Address.Attach(address);
            DB.Address.Remove(address);
        }

        #endregion

        #region SalesOrderHeader

        [Query]
        public async Task<QueryResult<SalesOrderHeader>> ReadSalesOrderHeader()
        {
            var res = await this.PerformQuery(DB.SalesOrderHeader.AsNoTracking()).ToListAsync();
            return new QueryResult<SalesOrderHeader>(res, totalCount: null);
        }

        [AuthorizeRoles(new[] { ADMINS_ROLE })]
        [Insert]
        public void InsertSalesOrderHeader(SalesOrderHeader salesorderheader)
        {
            salesorderheader.SalesOrderNumber = DateTime.Now.Ticks.ToString();
            DB.SalesOrderHeader.Add(salesorderheader);
        }

        [AuthorizeRoles(new[] { ADMINS_ROLE })]
        [Update]
        public void UpdateSalesOrderHeader(SalesOrderHeader salesorderheader)
        {
            salesorderheader.ModifiedDate = DateTime.Now;
            var orig = this.GetOriginal<SalesOrderHeader>();
            var entry = DB.SalesOrderHeader.Attach(salesorderheader);
            entry.OriginalValues.SetValues(orig);
        }

        [AuthorizeRoles(new[] { ADMINS_ROLE })]
        [Delete]
        public void DeleteSalesOrderHeader(SalesOrderHeader salesorderheader)
        {
            DB.SalesOrderHeader.Attach(salesorderheader);
            DB.SalesOrderHeader.Remove(salesorderheader);
        }

        #endregion

        #region SalesOrderDetail

        [Query]
        public async Task<QueryResult<SalesOrderDetail>> ReadSalesOrderDetail()
        {
            var res = await this.PerformQuery(DB.SalesOrderDetail.AsNoTracking()).ToListAsync();
            return new QueryResult<SalesOrderDetail>(res, totalCount: null);
        }

        [AuthorizeRoles(new[] {ADMINS_ROLE})]
        [Insert]
        public void InsertSalesOrderDetail(SalesOrderDetail salesorderdetail)
        {
            DB.SalesOrderDetail.Add(salesorderdetail);
        }

        [AuthorizeRoles(new[] {ADMINS_ROLE})]
        [Update]
        public void UpdateSalesOrderDetail(SalesOrderDetail salesorderdetail)
        {
            salesorderdetail.ModifiedDate = DateTime.Now;
            var orig = this.GetOriginal<SalesOrderDetail>();
            DB.SalesOrderDetail.Attach(salesorderdetail);
            DB.Entry(salesorderdetail).OriginalValues.SetValues(orig);
        }

        [AuthorizeRoles(new[] {ADMINS_ROLE})]
        [Delete]
        public void DeleteSalesOrderDetail(SalesOrderDetail salesorderdetail)
        {
            DB.SalesOrderDetail.Attach(salesorderdetail);
            DB.SalesOrderDetail.Remove(salesorderdetail);
        }

        #endregion
    }
}