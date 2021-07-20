using Microsoft.AspNetCore.Mvc;
using RIAppDemo.BLL.Utils;
using System;
using System.IO;
using System.Net.Mime;
using System.Threading.Tasks;

namespace RIAppDemo.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class DownloadController : ControllerBase
    {
        private readonly IThumbnailService _thumbnailService;

        public DownloadController(IThumbnailService thumbnailService)
        {
            _thumbnailService = thumbnailService;
        }

        public ActionResult Index()
        {
            return new EmptyResult();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> ThumbnailDownload(int id)
        {
            try
            {
                MemoryStream stream = new MemoryStream();
                string fileName = await _thumbnailService.GetThumbnail(id, stream);
                if (string.IsNullOrEmpty(fileName))
                {
                    return StatusCode(400);
                }

                stream.Position = 0;
                FileStreamResult res = new FileStreamResult(stream, MediaTypeNames.Image.Jpeg)
                {
                    FileDownloadName = fileName
                };
                return res;
            }
            catch (Exception)
            {
                return StatusCode(404);
            }
        }
    }
}