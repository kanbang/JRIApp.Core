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
                var topts = new TransactionOptions() { Timeout = TimeSpan.FromSeconds(60), IsolationLevel = IsolationLevel.Serializable };
                using (var scope = new TransactionScope(TransactionScopeOption.Required, topts, TransactionScopeAsyncFlowOption.Enabled))
                using (var conn = _connectionFactory.GetRIAppDemoConnection())
                {
                    var dbOptionsBuilder = new DbContextOptionsBuilder<AdventureWorksLT2012Context>();
                    dbOptionsBuilder.UseSqlServer(conn);
                    // Create in the same transaction and connection!!!
                    using (AdventureWorksLT2012Context db = new AdventureWorksLT2012Context(dbOptionsBuilder.Options))
                    {
                        fileName = await db.Product.Where(a => a.ProductId == id).Select(a => a.ThumbnailPhotoFileName).FirstOrDefaultAsync();

                        if (string.IsNullOrEmpty(fileName))
                        {
                            throw new Exception($"Product: {id} is not found");
                        }

                        using (var bstrm = new BlobStream(conn as SqlConnection, "[SalesLT].[Product]", "ThumbNailPhoto",
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
                var msg = "";
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
                var topts = new TransactionOptions() { Timeout = TimeSpan.FromSeconds(60), IsolationLevel = IsolationLevel.Serializable };
                using (var trxScope = new TransactionScope(TransactionScopeOption.Required, topts, TransactionScopeAsyncFlowOption.Enabled))
                using (var conn = _connectionFactory.GetRIAppDemoConnection())
                {
                    var dbOptionsBuilder = new DbContextOptionsBuilder<AdventureWorksLT2012Context>();
                    dbOptionsBuilder.UseSqlServer(conn);
                    // Create in the same transaction !!!
                    using (AdventureWorksLT2012Context db = new AdventureWorksLT2012Context(dbOptionsBuilder.Options))
                    {
                        var product = await db.Product.Where(a => a.ProductId == id).FirstOrDefaultAsync();
                        if (product == null)
                        {
                            throw new Exception(string.Format("Product {0} is Not Found", id));
                        }

                        using (var blobStream = new BlobStream(conn as SqlConnection, "[SalesLT].[Product]", "ThumbNailPhoto",
                            string.Format("WHERE [ProductID]={0}", id)))
                        using (var bufferedStream = new BufferedStream(blobStream, 128 * 1024))
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
                var msg = "";
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
