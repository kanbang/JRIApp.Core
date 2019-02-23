using FileUpload.Filters;
using Microsoft.AspNetCore.Mvc;
using RIAppDemo.BLL.Utils;
using RIAppDemo.Models;
using System;
using System.IO;
using System.Threading.Tasks;

namespace RIAppDemo.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        readonly IThumbnailService _thumbnailService;
        readonly string _dataDirectory;

        public UploadController(IThumbnailService thumbnailService, IPathService pathService)
        {
            _thumbnailService = thumbnailService;
            _dataDirectory = pathService.DataDirectory;
        }

        public ActionResult Index()
        {
            return new EmptyResult();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        [DisableFormValueModelBinding]
        [RequestSizeLimit(100000000)]
        public async Task<ActionResult> ThumbnailUpload()
        {
            try
            {
                UploadedFile file = this.GetFileFromRequest();
                if (file.DataContent != null)
                {
                    try
                    {
                        var filename = Path.GetFileName(file.FileName);
                        if (filename != null)
                        {
                            await _thumbnailService.SaveThumbnail(file.DataID, file.FileName, file.DataContent);
                        }
                    }
                    finally
                    {
                        file.DataContent.CleanUp();
                    }
                }

                return StatusCode(200);
            }
            catch (Exception)
            {
                return StatusCode(400);
            }
        }
    }
}