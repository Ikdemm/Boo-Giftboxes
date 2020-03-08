package com.example.springsocial.payload.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

public class ChangePasswordRequest {
    @NotNull(message = "Email is required")
    @Email(message = "Email must be a valid email address")
    private String email;
    @NotNull(message = "Password is required")
    private String password;
    @NotNull(message = "Confirm Password is required")
    private String confirmPassword;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }



    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

}
