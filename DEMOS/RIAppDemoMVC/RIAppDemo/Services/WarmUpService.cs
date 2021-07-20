using Microsoft.AspNetCore.Hosting.Server.Features;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using RIAppDemo.BLL.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
/*
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
*/
using System.Threading;
using System.Threading.Tasks;

namespace RIAppDemo.Services
{
    /// <summary>
    /// Makes Services initialization to improve first time call performance
    /// </summary>
    public class WarmUpService : IHostedService
    {
        private readonly ILogger _logger;
        private readonly IServerAddressesFeature _saf;

        public WarmUpService(IServiceProvider services, ILogger<WarmUpService> logger, IServerAddressesFeature serverAddressesFeature)
        {
            Services = services;
            _logger = logger;
            _saf = serverAddressesFeature;
        }

        public IServiceProvider Services { get; }

        public async Task StartAsync(CancellationToken cancellationToken)
        {
            try
            {
                string baseUrl = _saf?.Addresses?.FirstOrDefault();
                await _WarmUp(baseUrl);
            }
            catch (Exception ex)
            {
                _logger.LogCritical(ex, "WarmUp Failed");
            }
        }

        private async Task _WarmUp(string baseUrl)
        {
            using (IServiceScope scope = Services.CreateScope())
            {
                IEnumerable<IWarmUp> warmups = scope.ServiceProvider.GetServices<IWarmUp>();

                foreach (IWarmUp warmup in warmups)
                {
                    try
                    {
                        await warmup.WarmUp();
                    }
                    catch (Exception ex)
                    {
                        _logger.LogError(ex, $"WarmUp: {warmup.Name} failed");
                    }
                }
            }

            /*
            try
            {
                // can improve first time access performance
                await _CallRIAppDemoServiceEF(baseUrl);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"WarmUp: {nameof(_CallRIAppDemoServiceEF)} failed");
            }
            */
        }

        /*
        async Task _CallRIAppDemoServiceEF(string baseUrl)
        {
            string url = @"/RIAppDemoServiceEF/ProductModelData/";

            using (HttpClientHandler handler = new HttpClientHandler())
            {
                handler.AutomaticDecompression = System.Net.DecompressionMethods.GZip;

                using (HttpClient client = new HttpClient(handler))
                {
                    client.BaseAddress = new Uri(baseUrl);
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    client.DefaultRequestHeaders.AcceptEncoding.Add(new StringWithQualityHeaderValue("gzip"));
                    var response = await client.GetAsync(url);

                    if (!response.IsSuccessStatusCode)
                    {
                        throw new Exception($"Failed to call {baseUrl}{url}");
                    }

                    var resultStream = await response.Content.ReadAsStreamAsync();
                    using (StreamReader reader = new StreamReader(resultStream, System.Text.Encoding.UTF8))
                    {
                        string result = await reader.ReadToEndAsync();
                    }
                }
            }
        }
        */

        public Task StopAsync(CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }
    }
}
