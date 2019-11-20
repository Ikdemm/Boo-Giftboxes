package com.example.springsocial.modelDto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class ChequeDto {
    @Email
    @NotBlank
    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
