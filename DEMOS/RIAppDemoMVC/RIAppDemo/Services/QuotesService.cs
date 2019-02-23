using Microsoft.AspNetCore.SignalR;
using SignalRChat.Hubs;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace RIAppDemo.Services
{
    /// <summary>
    /// Runs in background and periodically sends quotes
    /// </summary>
    public class QuotesService : HostedService
    {
        private readonly IHubContext<QuotesHub> _hub;

        private static string _getQuote()
        {
            Random rnd = new Random(Guid.NewGuid().GetHashCode());
            string[] words = new string[] { "Test", "How", "Messaging", "Working", "Random", "Words", "For", "Demo", "Purposes", "Only", "Needed" };
            string message = "<b>Quote of the day</b>: <i>" + string.Join(" ", words.Select(w => words[rnd.Next(0, 10)]).ToArray()) + "</i>";
            return message;
        }

        public QuotesService(IHubContext<QuotesHub> hub)
        {
            _hub = hub;
        }

        protected override async Task ExecuteAsync(CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                string quote = _getQuote();
                await _hub.Clients.All.SendAsync("OnNewQuote", quote, cancellationToken);
                await Task.Delay(TimeSpan.FromSeconds(2), cancellationToken);
            }
        }
    }
}
