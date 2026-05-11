package com.ecommerce.ecommerce_site.config;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import java.util.Date;

import javax.crypto.SecretKey;

@Service
public class JwtProvider {
   private String SECRET_KEY = "your-very-long-secret-key-at-least-32-characters";
   
   private SecretKey key() {
       return Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
   }
   
    public String generateToken(Authentication auth){
        String jwt=Jwts.builder()
        .setIssuedAt(new Date())
        .setExpiration(new Date(new Date().getTime()+84600000))
        .claim("email", auth.getName())
        .signWith(key()).compact();
        return jwt;
    }


    public String getEmailFromToken(String jwt){
        jwt=jwt.substring(7);
        Claims claims=Jwts.parserBuilder().setSigningKey(key()).build().parseClaimsJws(jwt).getBody();
        String email=String.valueOf(claims.get("email"));
        return email;
    }

}
