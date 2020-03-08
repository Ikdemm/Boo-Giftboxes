package com.example.springsocial.payload.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

public class UpdatePasswordRequest {
    @NotNull(message = "Email is required")
    @Email(message = "Email must be a valid email address")
    private String email;
    @NotNull(message = "Old Password is required")
    private String oldPassword;
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

    public String getOldPassword() {
        return oldPassword;
    }

    public void setOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
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


