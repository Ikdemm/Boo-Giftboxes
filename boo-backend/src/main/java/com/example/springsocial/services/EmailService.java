package com.example.springsocial.services;

import com.example.springsocial.model.*;
import org.springframework.mail.MailException;

import javax.mail.MessagingException;

public interface EmailService {
    void sendEmailWithAttachment(EmailAddress user) throws MailException, MessagingException;
    void sendPartnertAddMail( User user);
    void sendChequeMail( Cheque cheque,User user);
    void sendOrderMail(User user, Commande commande);
    void sendSignUpMail(User user);


}
