using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using RIAPP.DataService.Core.Exceptions;
using RIAppDemo.BLL.Utils;
using RIAppDemo.DAL.EF;
using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Transactions;

namespace RIAppDemo.BLL.DataServices
{
    public class ThumbnailService : IThumbnailService
    {
        private readonly DBConnectionFactory _connectionFactory;
        private readonly ILogger<ThumbnailService> _logger;

        public ThumbnailService(DBConnectionFactory connectionFactory, ILoggerFactory loggerFactory)
        {
            _connectionFactory = connectionFactory;
            _logger = loggerFactory.CreateLogger<ThumbnailService>();
        }

        #region IThumbnailService

        public async Task<string> GetThumbnail(int id, Stream strm)
        {
            string fileName = string.Empty;
            try
            {
                TransactionOptions topts = new TransactionOptions() { Timeout = TimeSpan.FromSeconds(60), IsolationLevel = IsolationLevel.Serializable };
                using (TransactionScope scope = new TransactionScope(TransactionScopeOption.Required, topts, TransactionScopeAsyncFlowOption.Enabled))
                using (System.Data.Common.DbConnection conn = _connectionFactory.GetRIAppDemoConnection())
                {
                    DbContextOptionsBuilder<AdventureWorksLT2012Context> dbOptionsBuilder = new DbContextOptionsBuilder<AdventureWorksLT2012Context>();
                    dbOptionsBuilder.UseSqlServer(conn);
                    // Create in the same transaction and connection!!!
                    using (AdventureWorksLT2012Context db = new AdventureWorksLT2012Context(dbOptionsBuilder.Options))
                    {
                        fileName = await db.Product.Where(a => a.ProductId == id).Select(a => a.ThumbnailPhotoFileName).FirstOrDefaultAsync();

                        if (string.IsNullOrEmpty(fileName))
                        {
                            throw new Exception($"Product: {id} is not found");
                        }

                        using (BlobStream bstrm = new BlobStream(conn as SqlConnection, "[SalesLT].[Product]", "ThumbNailPhoto",
                            string.Format("WHERE [ProductID]={0}", id)))
                        {
                            bstrm.Open();
                            await bstrm.CopyToAsync(strm, 512 * 1024);
                        }

                        scope.Complete();
                    }
                }

                return fileName;
            }
            catch (Exception ex)
            {
                string msg = "";
                if (ex != null)
                {
                    msg = ex.GetFullMessage();
                }

                _logger.LogError(ex, msg);
                throw;
            }
        }

        public async Task SaveThumbnail(int id, string fileName, IDataContent content)
        {
            try
            {
                TransactionOptions topts = new TransactionOptions() { Timeout = TimeSpan.FromSeconds(60), IsolationLevel = IsolationLevel.Serializable };
                using (TransactionScope trxScope = new TransactionScope(TransactionScopeOption.Required, topts, TransactionScopeAsyncFlowOption.Enabled))
                using (System.Data.Common.DbConnection conn = _connectionFactory.GetRIAppDemoConnection())
                {
                    DbContextOptionsBuilder<AdventureWorksLT2012Context> dbOptionsBuilder = new DbContextOptionsBuilder<AdventureWorksLT2012Context>();
                    dbOptionsBuilder.UseSqlServer(conn);
                    // Create in the same transaction !!!
                    using (AdventureWorksLT2012Context db = new AdventureWorksLT2012Context(dbOptionsBuilder.Options))
                    {
                        Product product = await db.Product.Where(a => a.ProductId == id).FirstOrDefaultAsync();
                        if (product == null)
                        {
                            throw new Exception(string.Format("Product {0} is Not Found", id));
                        }

                        using (BlobStream blobStream = new BlobStream(conn as SqlConnection, "[SalesLT].[Product]", "ThumbNailPhoto",
                            string.Format("WHERE [ProductID]={0}", id)))
                        using (BufferedStream bufferedStream = new BufferedStream(blobStream, 128 * 1024))
                        {
                            await blobStream.InitColumnAsync();
                            blobStream.Open();
                            Task delayTask = Task.Delay(TimeSpan.FromSeconds(15));
                            Task completedTask = await Task.WhenAny(content.CopyToAsync(bufferedStream), delayTask);
                            if (completedTask == delayTask)
                            {
                                throw new Exception("Saving Image took longer than expected");
                            }

                            await bufferedStream.FlushAsync();
                        }

                        product.ThumbnailPhotoFileName = fileName;
                        await db.SaveChangesAsync();
                        trxScope.Complete();
                    }
                }
            }
            catch (Exception ex)
            {
                string msg = "";
                if (ex != null)
                {
                    msg = ex.GetFullMessage();
                }

                _logger.LogError(ex, msg);
                throw;
            }
        }

        #endregion
    }
}
