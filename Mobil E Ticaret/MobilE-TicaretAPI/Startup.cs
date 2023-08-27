using BuissnesLayer.Abstract;
using BuissnesLayer.Concrete;
using DataAcsessLayer.Abstract;
using DataAcsessLayer.Concrete.EfCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using MobilE_Ticaret.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
namespace MobilE_TicaretAPI
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
			services.AddDbContext<ApplicationContext>(options => options.UseSqlServer("server=LAPTOP-LM2N83TK;database=MobilDb;integrated security=true;"));
			services.AddIdentity<User, IdentityRole>().AddEntityFrameworkStores<ApplicationContext>().AddDefaultTokenProviders();

			services.Configure<IdentityOptions>(options =>
			{
				options.Password.RequireDigit = true;
				options.Password.RequireLowercase = true;
				options.Password.RequireUppercase = true;
				options.Password.RequireNonAlphanumeric = true;
				options.Password.RequiredLength = 6;

				options.Lockout.MaxFailedAccessAttempts = 5;
				options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
				options.Lockout.AllowedForNewUsers = true;

				options.User.RequireUniqueEmail = true;
				options.SignIn.RequireConfirmedEmail = false;
				options.SignIn.RequireConfirmedPhoneNumber = false;

			});

			services.ConfigureApplicationCookie(options =>
			{
				options.LoginPath = "/account/login";
				options.LogoutPath = "/account/logout";
				options.AccessDeniedPath = "/account/accessdenied";
				options.SlidingExpiration = true;
				options.ExpireTimeSpan = TimeSpan.FromDays(1);
				options.Cookie = new CookieBuilder
				{
					HttpOnly = true,
					Name = ".Metin.Security.Cookie",
					SameSite = SameSiteMode.Strict
				};
			});

			services.AddCors(options =>
			{
				options.AddPolicy("AllowSpecificOrigin",
					builder =>
					{
						builder.WithOrigins("http://localhost:19006")
							   .AllowAnyHeader()
							   .AllowAnyMethod();
					});
			});
			services.AddScoped<IProductService, ProductManager>();
			services.AddScoped<ICategoryService, CategoryManager>();
			services.AddScoped<IGenderService, GenderManager>();
			services.AddScoped<ICartService, CartManager>();
			services.AddScoped<IFavoriService, FavoriManager>();

			services.AddScoped<IProductRepository, EfCoreProductRepository>();
			services.AddScoped<ICategoryRepository, EfCoreCategoryRepository>();
			services.AddScoped<IGenderRepository, EfCoreGenderRepository>();
			services.AddScoped<ICartRepository, EfCoreCartRepository>();
			services.AddScoped<IFavoriRepository, EfCoreFavoriRepository>();

			services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "MobilE_TicaretAPI", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "MobilE_TicaretAPI v1"));
            }
			app.UseCors("AllowSpecificOrigin");
			app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
