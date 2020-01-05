using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace SignalRChat.Hubs
{
    public interface IQuotesClient
    {
        Task OnNewQuote(string quote);
    }

    public class QuotesHub : Hub<IQuotesClient>
    {
        public override async Task OnConnectedAsync()
        {
            await base.OnConnectedAsync();
        }

        public override async Task OnDisconnectedAsync(Exception ex)
        {
            await base.OnDisconnectedAsync(ex);
        }

        /// <summary>
        /// The user can send its own quote to other users
        /// </summary>
        /// <param name="quote"></param>
        /// <returns></returns>
        public async Task SendMyQuote(string quote)
        {
            await Clients.Others.OnNewQuote($"<b>ConnectionID</b>: {Context.ConnectionId} shares his quote: {quote}");
        }
    }
}