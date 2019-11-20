package com.example.springsocial.services.impl;

import com.example.springsocial.model.EmailAddress;
import com.example.springsocial.model.Mail;
import com.example.springsocial.services.EmailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;

@Service
public class EmailServiceImpl implements EmailService {
    private static final Logger logger = LoggerFactory.getLogger(EmailServiceImpl.class);
    public static int noOfQuickServiceThreads = 20;

    @Autowired
    private JavaMailSender sender;
    @Autowired
    private JavaMailSender emailSender;
    /**
     * this statement create a thread pool of twenty threads
     * here we are assigning send mail task using ScheduledExecutorService.submit();
     */
    private ScheduledExecutorService quickService = Executors.newScheduledThreadPool(noOfQuickServiceThreads); // Creates a thread pool that reuses fixed number of threads(as specified by noOfThreads in this case).
    @Autowired
    public EmailServiceImpl(JavaMailSender javaMailSender) {
        this.emailSender = javaMailSender;
    }

    /**
     * TODO send email inside Thread
     * @param toEmail
     * @param subject
     * @param text
     * @throws MailException
     * @throws RuntimeException
     */
    @Override
    public void sendASynchronousMail(String toEmail,String subject,String text) throws MailException,RuntimeException{
        logger.info("inside sendASynchronousMail method");
        quickService.submit(new Runnable() {
            @Override
            public void run() {
                try{
                    logger.info("inside thread method");
                    SimpleMailMessage mail=new SimpleMailMessage();
                    mail.setTo(toEmail);
                    mail.setSubject(subject);
                    mail.setText("This a ASynchronousMail : "+text);
                    sender.send(mail);
                }catch(Exception e){
                    logger.error("Exception occur while send a mail : ",e);
                }
            }
        });
        logger.info("after thread method");
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

