# Training



ADO.Net info
============
/*
     * 
     * Steps to configure

        1. Install Swashbuckle.AspNetCore (Nuget Packages --> Latest version --> Include Prerelease - Check)
        2. Startup.cs class
	        -- ConfigureServices
		            services.AddSwaggerGen(c =>
                    {
                        c.SwaggerDoc(name: "v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "Student Api", Version = "V1" });
                    });

	        -- Configure
		            app.UseSwagger();
                    app.UseSwaggerUI(c =>
                    {
                        c.SwaggerEndpoint(url: "/swagger/v1/swagger.json", name: "My Student API");
                    });
     */
