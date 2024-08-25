package com.uwindsor.campusmanagement.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors()  // Enable CORS support in Spring Security
                .and()
                .csrf().disable()  // Disable CSRF for simplicity (not recommended for production)
                .authorizeRequests()
                .antMatchers("/api/**").permitAll()  // Allow all requests to /api/ endpoints
                .anyRequest().authenticated();  // Require authentication for other requests

        return http.build();
    }
}
