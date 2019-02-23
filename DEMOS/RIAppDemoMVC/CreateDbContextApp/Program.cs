using RIAPP.DataService.DomainService.Types;
using System;

namespace RIAppDemo.DAL
{
    class Program
    {
        static void Main(string[] args)
        {
            ADWDataService dataService = new ADWDataService();
            // var metadata = dataService.GetDraftMetadata();
            var content = dataService.ServiceCodeGen(new CodeGenArgs("xaml") { isDraft = true });
            Console.WriteLine(content);
            Console.ReadKey();
        }
    }
}
