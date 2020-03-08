package com.example.springsocial.payload.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

public class ResetPasswordRequest {
    @NotNull(message = "Email is required")
    @Email(message = "Email must be a valid email address")
    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
