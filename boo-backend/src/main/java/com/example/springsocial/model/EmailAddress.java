package com.example.springsocial.model;

import org.springframework.stereotype.Component;


@Component
public class EmailAddress {

    private String emailAddress;

    public String getEmailAddress() {
        return emailAddress;
    }
    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }
}