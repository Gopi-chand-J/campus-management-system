package com.uwindsor.campusmanagement;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class config implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")  // Apply CORS to all /api/ endpoints
                .allowedOrigins("http://localhost:4200")  // Allow requests from your Angular app
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")  // Include OPTIONS method for preflight requests
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600);  // Cache preflight response for 1 hour
    }
}
