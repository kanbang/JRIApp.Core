using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Hosting.Server.Features;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using RIAPP.DataService.DomainService.CodeGen;
using RIAPP.DataService.Utils;
using RIAppDemo.BLL.DataServices.Config;
using RIAppDemo.BLL.Utils;
using RIAppDemo.Services;
using RIAppDemo.Utils;
using SignalRChat.Hubs;
using System;
using System.Security.Claims;
using IHostingEnvironment = Microsoft.AspNetCore.Hosting.IHostingEnvironment;

namespace RIAppDemo
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            /*
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });
            */

            services.AddResponseCaching();

            services.AddMvc((mvcOptions)=> {
                mvcOptions.EnableEndpointRouting = true;
            }).SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            services.AddAuthorization(options =>
            {
                options.AddPolicy("RequireUpdateRights", policy => policy.RequireClaim("Permission",  "CanUpdate"));
            });

            services.Configure<GzipCompressionProviderOptions>(options => options.Level = System.IO.Compression.CompressionLevel.Optimal);
            services.AddResponseCompression(options =>
            {
                options.MimeTypes = new[]
                {
            // Default
            "text/plain",
            "text/css",
            "application/javascript",
            // "text/html",
            "application/xml",
            "text/xml",
            "application/json",
            "text/json",
            // Custom
            "image/svg+xml"
                };
            });

            services.AddHttpContextAccessor();

            services.AddScoped<IHostAddrService, HostAddrService>();

            services.AddSingleton<IPathService, PathService>();

            services.AddSignalR((options)=> {
                options.EnableDetailedErrors = true;
                options.KeepAliveInterval = TimeSpan.FromSeconds(120);
            });

            services.AddHostedService<WarmUpService>();
            services.AddHostedService<QuotesService>();

            #region Local Functions
            Func<IServiceProvider, ClaimsPrincipal> getCurrentUser = (sp) =>
            {
                /*
                // this is how to get the real authenticated user
                var httpContextAccessor = sp.GetRequiredService<IHttpContextAccessor>();
                var user = httpContextAccessor?.HttpContext?.User;
                return user?? new ClaimsPrincipal(new ClaimsIdentity(null, Enumerable.Empty<Claim>()));
                */

                // the demo uses artificially created user 
               
                var basicPrincipal = new ClaimsPrincipal(
                 new ClaimsIdentity(
                     new Claim[] {
                        new Claim("Permission", "CanUpdate"),
                        new Claim(ClaimTypes.Role, "Admins"),
                        new Claim(ClaimTypes.Role,  "Users"),
                        new Claim(ClaimTypes.NameIdentifier, "DUMMY_USER")},
                         "Basic"));

                var validUser = basicPrincipal;

                var bearerIdentity = new ClaimsIdentity(
                        new Claim[] {
                        new Claim("Permission", "CupBearer"),
                        new Claim(ClaimTypes.Role, "Token"),
                        new Claim(ClaimTypes.NameIdentifier, "DUMMY_USER Bear")},
                            "Bearer");

                validUser.AddIdentity(bearerIdentity);

                return validUser;
            };
            #endregion

            // P.S.- IServerAddressesFeature is Useless with IIS Integration!
            services.AddSingleton<IServerAddressesFeature>((sp) => _serverAddressesFeature);
            services.AddThumbnailService();

            services.AddSingleton<ICodeGenConfig, CodeGenConfig>();
            services.AddSingleton<ISerializer, Serializer>();

            services.AddFolderBrowser((options)=> {
                options.GetUser = getCurrentUser;
            });

            services.AddRIAppDemoService((options) => {
                options.GetUser = getCurrentUser;
                options.ConnectionString = Configuration[$"ConnectionStrings:DBConnectionStringADW"];
            });
        }

        private IServerAddressesFeature _serverAddressesFeature;

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            _serverAddressesFeature = app.ServerFeatures.Get<IServerAddressesFeature>();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Demo/Error");
            }

            app.UseResponseCompression();

            app.UseStaticFiles();

            // app.UseCookiePolicy();

            app.UseResponseCaching();

            app.UseSignalR(route =>
            {
                route.MapHub<QuotesHub>("/quotes");
            });

            PathService.InitEnvironmentPaths(env);

            
            app.UseMvc(routes =>
            {
               
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Demo}/{action=Index}/{id?}");
            });
        }
    }
}
