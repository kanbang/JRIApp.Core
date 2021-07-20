using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;


namespace RIAppDemo
{
    public class Program
    {
        public static void Main(string[] args)
        {
            IHostBuilder builder = CreateHostBuilder(args);
            IHost host = builder.Build();
            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args)
        {
            return Host.CreateDefaultBuilder(args).ConfigureWebHostDefaults(webBuilder =>
{
    webBuilder.ConfigureLogging((context, logBuilder) =>
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
    });



    webBuilder.ConfigureKestrel(serverOptions =>
    {
        // Set properties and call methods on options
    });

    webBuilder.UseStartup<Startup>();
});
        }
    }
}
