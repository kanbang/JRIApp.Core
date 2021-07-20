using Microsoft.AspNetCore.Mvc;
using RIAppDemo.BLL.Utils;
using System;

namespace RIAppDemo.Models
{
    public static class UploadExtensions
    {
        private static UploadedFile RetrieveFileFromRequest(ControllerBase controller)
        {
            Microsoft.AspNetCore.Http.HttpRequest Request = controller.Request;
            // the Request.ContentLength.Value is not the same as file size
            long fileSize = long.Parse(Request.Headers["X-File-Size"]);
            string filename = Uri.UnescapeDataString(Request.Headers["X-File-Name"]);
            string fileType = Request.Headers["X-File-Type"];
            int id = int.Parse(Request.Headers["X-Data-Id"]);

            return new UploadedFile()
            {
                FileName = filename,
                ContentType = fileType,
                FileSize = fileSize,
                DataID = id,
                DataContent = new StreamContent(controller.HttpContext.Request)
            };
        }

        public static UploadedFile GetFileFromRequest(this ControllerBase controller)
        {
            UploadedFile file = RetrieveFileFromRequest(controller);
            return file;
        }
    }

    public class UploadedFile
    {
        public int DataID { get; set; }
        public long FileSize { get; set; }
        public string FileName { get; set; }
        public string ContentType { get; set; }
        public IDataContent DataContent { get; set; }
    }
}