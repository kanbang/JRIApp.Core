using FileUpload.Helpers;
using Microsoft.AspNetCore.Http;
using System.IO;
using System.Threading.Tasks;

namespace RIAppDemo.BLL.Utils
{
    public class StreamContent : IDataContent
    {
        readonly HttpRequest _request;

        public StreamContent(HttpRequest request)
        {
            this._request = request;
        }

        public async Task CopyToAsync(Stream stream, int bufferSize = 131072)
        {
            await _request.StreamFile(stream, bufferSize);
        }

        public void CleanUp()
        {
            //noop
        }
    }
}
