package com.example.springsocial.services.impl;

import com.example.springsocial.controller.AuthController;
import com.example.springsocial.exception.BadRequestException;
import com.example.springsocial.model.AuthProvider;
import com.example.springsocial.model.Role;
import com.example.springsocial.model.User;
import com.example.springsocial.payload.request.*;
import com.example.springsocial.payload.response.ApiResponse;
import com.example.springsocial.payload.response.AuthResponse;
import com.example.springsocial.repository.RoleRepository;
import com.example.springsocial.repository.UserRepository;
import com.example.springsocial.security.TokenProvider;
import com.example.springsocial.security.UserPrincipal;
import com.example.springsocial.services.AuthService;
import com.example.springsocial.services.EmailService;
import com.example.springsocial.services.UserSevice;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.HashSet;
import java.util.Set;

@Service
public class AuthServiceImpl implements AuthService {
    private static final Logger log = LoggerFactory.getLogger(AuthServiceImpl.class);

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private TokenProvider tokenProvider;
    @Autowired
    private EmailService emailService;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private UserSevice userSevice;
    @Override
    public AuthResponse singIn(LoginRequest loginRequest) {
        try{
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getEmail(),
                            loginRequest.getPassword()
                    )
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);

            String token = tokenProvider.createToken(authentication);
            return new AuthResponse(token);
        }catch (Exception e){
            throw new BadRequestException(e.getMessage());
        }
    }

    @Override
    public ApiResponse signUp(SignUpRequest signUpRequest) {
        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            throw new BadRequestException("Email address already in use.");
        }

        // Creating user's account
        User user = new User();
        user.setName(signUpRequest.getName());
        user.setEmail(signUpRequest.getEmail());
        user.setPassword(signUpRequest.getPassword());
        user.setProvider(AuthProvider.local);
        emailService.sendSignUpMail(user);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Set<Role> roles = new HashSet<Role>(roleRepository.findByName("USER"));
        user.setRoles(roles);
        User result = userRepository.save(user);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/user/me")
                .buildAndExpand(result.getId()).toUri();

        return new ApiResponse(200, "User registered successfully", result);

    }

    @Override
    public void resetPassword(ResetPasswordRequest resetPasswordRequest) {
        User user = this.userSevice.findUserByEmail(resetPasswordRequest.getEmail());
        String token = this.tokenProvider.generateResetPasswordJwt(user);
        log.info(token);
        this.emailService.sendResetPasswordMail(user,token);
    }

    @Override
    public void changePassword(UserPrincipal userPrincipal, ChangePasswordRequest changePasswordRequest) {
        User user = this.userSevice.findUserByEmail(changePasswordRequest.getEmail());
        log.info(changePasswordRequest.getEmail());
        log.info(userPrincipal.getEmail());
        if(!changePasswordRequest.getEmail().equalsIgnoreCase(userPrincipal.getEmail())){
            throw new BadRequestException("Check your mail");
        }
        user.setPassword(passwordEncoder.encode(changePasswordRequest.getPassword()));
        userRepository.save(user);


    }

    @Override
    public void updatePassword(UserPrincipal userPrincipal, UpdatePasswordRequest updatePasswordRequest) {
        User user = this.userSevice.findUserByEmail(updatePasswordRequest.getEmail());
        log.info(updatePasswordRequest.getEmail());
        log.info(userPrincipal.getEmail());
        if(!updatePasswordRequest.getEmail().equalsIgnoreCase(userPrincipal.getEmail())){
            throw new BadRequestException("Check your mail");
        }
        if(!passwordEncoder.matches(updatePasswordRequest.getOldPassword(),user.getPassword())){
            throw new BadRequestException("Check your old Password");
        }
        user.setPassword(passwordEncoder.encode(updatePasswordRequest.getPassword()));
        userRepository.save(user);
    }

}
