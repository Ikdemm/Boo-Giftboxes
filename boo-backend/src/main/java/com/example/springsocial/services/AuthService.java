package com.example.springsocial.services;

import com.example.springsocial.payload.request.*;
import com.example.springsocial.payload.response.ApiResponse;
import com.example.springsocial.payload.response.AuthResponse;
import com.example.springsocial.security.UserPrincipal;


public interface AuthService {
    AuthResponse singIn(LoginRequest loginRequest);
    ApiResponse signUp(SignUpRequest signUpRequest);
    void resetPassword(ResetPasswordRequest resetPasswordRequest);
    void changePassword(UserPrincipal userPrincipal,ChangePasswordRequest changePasswordRequest);
    void updatePassword(UserPrincipal userPrincipal, UpdatePasswordRequest updatePasswordRequest);

}
