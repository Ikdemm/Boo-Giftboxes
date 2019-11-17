package com.example.springsocial.services;

import com.example.springsocial.model.EmailAddress;
import com.example.springsocial.model.Mail;
import org.springframework.mail.MailException;

import javax.mail.MessagingException;

public interface EmailService {

    void sendEmail(EmailAddress user) throws MailException;
    void sendEmailWithAttachment(EmailAddress user) throws MailException, MessagingException;

}
