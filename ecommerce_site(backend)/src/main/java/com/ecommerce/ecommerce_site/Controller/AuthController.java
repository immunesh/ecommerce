package com.ecommerce.ecommerce_site.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.ecommerce_site.Entities.User;
import com.ecommerce.ecommerce_site.Exception.UserException;
import com.ecommerce.ecommerce_site.Repository.UserRepository;
import com.ecommerce.ecommerce_site.Request.LoginRequest;
import com.ecommerce.ecommerce_site.Response.AuthResponse;
import com.ecommerce.ecommerce_site.config.JwtProvider;

import com.ecommerce.ecommerce_site.DTO.UserDTO;
import lombok.AllArgsConstructor;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

@AllArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthController {
    private UserRepository userRepository;
    private JwtProvider jwtProvider;
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<String>  createUserHandler(@RequestBody UserDTO dto) throws UserException {
        String email = dto.getEmail();
        String password = dto.getPassword();
        String firstName = dto.getFirstName();
        String lastName = dto.getLastName();
        User isEmailExist = userRepository.findByEmail(email);
        if (isEmailExist != null) {
            throw new UserException("Email is Already used with another Account");
        }
        User createdUser = new User();
        createdUser.setEmail(email);
        createdUser.setPassword(password);
        createdUser.setFirstName(firstName);
        createdUser.setLastName(lastName);
        createdUser.setPassword(passwordEncoder.encode(password));
        userRepository.save(createdUser);
       
        return ResponseEntity.ok("register successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> LoginUserHandler(@RequestBody LoginRequest loginRequest) throws UserException {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new UserException("Invalid Email or Password");
        }
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new UserException("Invalid Email or Password");
        }
        Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtProvider.generateToken(authentication);
        AuthResponse authResponse = new AuthResponse(token, "Login Success");
        return ResponseEntity.ok(authResponse);
    }

}
