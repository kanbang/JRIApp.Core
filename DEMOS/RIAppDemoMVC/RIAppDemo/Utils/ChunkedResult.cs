using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using RIAPP.DataService.Utils;
using System.IO;
using System.Text;

namespace RIAppDemo.Utils
{
    public class ChunkedResult<T> : ActionResult
        where T : class
    {
        private static readonly string ResultContentType = "application/json";
        private readonly ISerializer _serializer;

        public ChunkedResult(T data, ISerializer serializer)
        {
            Data = data;
            _serializer = serializer;
        }

        public T Data { get; }

        public override void ExecuteResult(ActionContext context)
        {
            var response = context.HttpContext.Response;
            response.ContentType = ResultContentType;
            var stream = response.Body;

            IHttpBufferingFeature bufferingFeature = context.HttpContext.Features.Get<IHttpBufferingFeature>();
            if (bufferingFeature != null)
            {
                bufferingFeature.DisableResponseBuffering();
            }

            using (var writer = new StreamWriter(stream, Encoding.UTF8, 1024 * 32, true))
            {
                _serializer.Serialize(Data, writer);
            }
        }
    }
}