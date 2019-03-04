using Microsoft.Extensions.DependencyInjection;
using RIAPP.DataService.DomainService.CodeGen;
using RIAppDemo.Utils;
using System;

namespace RIAppDemo.DAL
{
    class Program
    {
        static void Main(string[] args)
        {
            string result = Helper.SetupAndRun((services) => {
                Startup.ConfigureServices(services);
            },
            (sp) =>
            {
                ADWDataService dataService = sp.GetRequiredService<ADWDataService>();
                // var metadata = dataService.GetDraftMetadata();
                var content = dataService.ServiceCodeGen(new CodeGenArgs("xaml") { isDraft = true });
                return content;
            });

            Console.WriteLine(result);
            Console.ReadKey();
        }
    }
}
