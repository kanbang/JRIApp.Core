using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;


namespace RIAppDemo
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = CreateWebHostBuilder(args);
            var webHost = builder.Build();
            webHost.Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
            .ConfigureLogging((context, logBuilder) =>
            {
                logBuilder.ClearProviders();
                logBuilder.AddFile(opts =>
                {
                    context.Configuration.GetSection("FileLoggingOptions").Bind(opts);
                });

                #region UnUsed             
                /*
                logBuilder.AddFile(opts =>
                {
                opts.FileName = "app-logs-";
                opts.FileSizeLimit = 4 * 1024 * 1024;
                opts.RetainedFileCountLimit = 10;
                opts.BatchSize = 64;
                opts.FlushPeriod = TimeSpan.FromSeconds(2);
                });
                */
                #endregion
            })
            .UseStartup<Startup>();
    }
}
