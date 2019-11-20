package com.example.springsocial.services;

import com.example.springsocial.model.EmailAddress;
import com.example.springsocial.model.Mail;
import org.springframework.mail.MailException;

import javax.mail.MessagingException;

public interface EmailService {
    void sendASynchronousMail(String toEmail,String subject,String text);
    void sendEmail(EmailAddress user) throws MailException;
    void sendEmailWithAttachment(EmailAddress user) throws MailException, MessagingException;

}
