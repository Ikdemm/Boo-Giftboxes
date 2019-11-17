package com.example.springsocial.services.impl;

import com.example.springsocial.model.EmailAddress;
import com.example.springsocial.model.Mail;
import com.example.springsocial.services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender emailSender;

    @Autowired
    public EmailServiceImpl(JavaMailSender javaMailSender) {
        this.emailSender = javaMailSender;
    }

    public void sendEmail(EmailAddress user) throws MailException {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(user.getEmailAddress());
        mail.setSubject("Testing Mail API");
        mail.setText("Hurray ! You have done that dude...");

        emailSender.send(mail);
    }

    public void sendEmailWithAttachment(EmailAddress user) throws MailException, MessagingException {

        MimeMessage mimeMessage = emailSender.createMimeMessage();

        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

        helper.setTo(user.getEmailAddress());
        helper.setSubject("Testing Mail API with Attachment");
        helper.setText("Please find the attached document below.");

        ClassPathResource classPathResource = new ClassPathResource("Attachment.pdf");
        helper.addAttachment(classPathResource.getFilename(), classPathResource);

        emailSender.send(mimeMessage);
    }


}

