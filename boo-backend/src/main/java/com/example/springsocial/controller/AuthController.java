package com.example.springsocial.controller;


import com.example.springsocial.payload.request.*;
import com.example.springsocial.payload.request.LoginRequest;
import com.example.springsocial.payload.request.ResetPasswordRequest;
import com.example.springsocial.payload.request.SignUpRequest;
import com.example.springsocial.payload.response.ApiResponse;
import com.example.springsocial.security.CurrentUser;
import com.example.springsocial.security.UserPrincipal;
import com.example.springsocial.services.AuthService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.hibernate.sql.Update;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private static final Logger log = LoggerFactory.getLogger(AuthController.class);
    ObjectMapper objectMapper = new ObjectMapper();
    @Autowired
    AuthService authService;

    /**
     * LOIGN WITH EMAIL AND PASSWORD
     * @param loginRequest
     * @return auth Response
     */
    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
            return ResponseEntity.ok(authService.singIn(loginRequest));

    }

    /**
     * SIGN UP SIMPLE USE
     * @param signUpRequest
     * @return api response message
     */
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
        authService.signUp(signUpRequest);
        return ResponseEntity.ok(new ApiResponse(200,"USER REGISTRATION","User Registered Successfully"));
    }
    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@Valid @RequestBody ResetPasswordRequest resetPasswordRequest){
        authService.resetPassword(resetPasswordRequest);
        return ResponseEntity.ok(new ApiResponse(200,"RESET PASSWORD","Password Reseated Successfully"));
    }
    @PreAuthorize("hasRole('ADMIN') or hasRole('PARTNER') or hasRole('USER')")
    @PostMapping("/change-password")
    public ResponseEntity<?> changePassword(@CurrentUser UserPrincipal userPrincipal,@Valid @RequestBody ChangePasswordRequest changePasswordRequest){
        authService.changePassword(userPrincipal,changePasswordRequest);
        return ResponseEntity.ok(new ApiResponse(200,"CHANGE PASSWORD","Password Changed Successfully"));
    }
    @PreAuthorize("hasRole('ADMIN') or hasRole('PARTNER') or hasRole('USER')")
    @PostMapping("/update-password")
    public ResponseEntity<?> updatePassword(@CurrentUser UserPrincipal userPrincipal,@Valid @RequestBody UpdatePasswordRequest updatePasswordRequest){
        authService.updatePassword(userPrincipal,updatePasswordRequest);
        return ResponseEntity.ok(new ApiResponse(200,"CHANGE PASSWORD","Password Changed Successfully"));
    }



}
