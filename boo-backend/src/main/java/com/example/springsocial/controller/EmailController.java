package com.example.springsocial.controller;


import com.example.springsocial.model.EmailAddress;
import com.example.springsocial.services.EmailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.mail.MessagingException;

@RestController
@RequestMapping("mail")
public class EmailController {

    private static Logger log = LoggerFactory.getLogger(EmailController.class);

    @Autowired
    private EmailAddress user;

    @Autowired
    EmailService emailService;

    @RequestMapping("send-mail")
    public String send() {
        user.setEmailAddress("ikdem.benmbarek@etudiant-fst.utm.tn");
        try {
            emailService.sendEmail(user);
        } catch (MailException mailException) {
            System.out.println(mailException);
        }
        return "Congratulations! Your mail has been send to the user.";
    }

    @RequestMapping("send-mail-attachment")
    public String sendWithAttachment() throws MessagingException {
        user.setEmailAddress("ikdem.benmbarek@etudiant-fst.utm.tn");
        try {
            emailService.sendEmailWithAttachment(user);
        } catch (MailException mailException) {
            System.out.println(mailException);
        }
        return "Congratulations! Your mail has been send to the user.";
    }


}
