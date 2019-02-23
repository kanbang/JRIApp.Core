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
        readonly IThumbnailService _thumbnailService;

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
                var stream = new MemoryStream();
                var fileName = await _thumbnailService.GetThumbnail(id, stream);
                if (string.IsNullOrEmpty(fileName))
                    return StatusCode(400);
                stream.Position = 0;
                var res = new FileStreamResult(stream, MediaTypeNames.Image.Jpeg);
                res.FileDownloadName = fileName;
                return res;
            }
            catch (Exception)
            {
                return StatusCode(404);
            }
        }
    }
}