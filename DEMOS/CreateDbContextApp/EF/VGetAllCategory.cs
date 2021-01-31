using System;
using System.Collections.Generic;

#nullable disable

namespace RIAppDemo.DAL.EF
{
    public partial class VGetAllCategory
    {
        public string ParentProductCategoryName { get; set; }
        public string ProductCategoryName { get; set; }
        public int? ProductCategoryId { get; set; }
    }
}
