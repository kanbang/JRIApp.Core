using RIAPP.DataService.Core.CodeGen;
using IHostingEnvironment = Microsoft.AspNetCore.Hosting.IHostingEnvironment;

namespace RIAppDemo.Utils
{
    public class CodeGenConfig : ICodeGenConfig
    {
        private readonly IHostingEnvironment _env;

        public CodeGenConfig(IHostingEnvironment env)
        {
            _env = env;
        }

        bool ICodeGenConfig.IsCodeGenEnabled => _env.EnvironmentName == "Development";
    }
}
