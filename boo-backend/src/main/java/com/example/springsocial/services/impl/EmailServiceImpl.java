package com.example.springsocial.services.impl;

import com.example.springsocial.config.ThymeleafConfig;
import com.example.springsocial.model.*;
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
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;

@Service
public class EmailServiceImpl implements EmailService {
    private static final Logger logger = LoggerFactory.getLogger(EmailServiceImpl.class);
    public static int noOfQuickServiceThreads = 20;

    @Autowired
    private JavaMailSender emailSender;
    @Autowired
    private SpringTemplateEngine templateEngine;
    /**
     * this statement create a thread pool of twenty threads
     * here we are assigning send mail task using ScheduledExecutorService.submit();
     */
    private ScheduledExecutorService quickService = Executors.newScheduledThreadPool(noOfQuickServiceThreads); // Creates a thread pool that reuses fixed number of threads(as specified by noOfThreads in this case).
    @Autowired
    public EmailServiceImpl(JavaMailSender javaMailSender) {
        this.emailSender = javaMailSender;
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

    @Override
    public void sendPartnertAddMail(User user) throws MailException,RuntimeException{
        logger.info("inside sendASynchronousMail method");
        quickService.submit(new Runnable() {
            @Override
            public void run() {
                try{
                    logger.info("inside thread method");
                    MimeMessage mimeMessage = emailSender.createMimeMessage();
                    MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true,"utf-8");
                    Context context = new Context();
                    Map<String, Object> model= new HashMap<>();
                    context.setVariable("name",user.getName());
                    context.setVariable("login",user.getEmail());
                    context.setVariable("password",user.getPassword());
                    logger.info(context.getVariable("name").toString());
                    String text = templateEngine.process("email_add_partner_template",context);
                    logger.info(text);
                    helper.setText(text, true);
                    helper.setSubject("Bienvenu cher BOO\'keur");
                    helper.setTo(user.getEmail());
                    emailSender.send(mimeMessage);
                }catch(Exception e){
                    logger.error("Exception occur while send a mail : ",e);
                }
            }
        });
        logger.info("after thread method");
    }

    @Override
    public void sendChequeMail(Cheque cheque,User user) throws MailException,RuntimeException {
        logger.info("inside sendASynchronousMail method");
        quickService.submit(new Runnable() {
            @Override
            public void run() {
                try{
                    logger.info("inside thread method");
                    MimeMessage mimeMessage = emailSender.createMimeMessage();
                    MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true,"utf-8");
                    Context context = new Context();
                    Map<String, Object> model= new HashMap<>();
                    context.setVariable("email",cheque.getEmail());
                    context.setVariable("code",cheque.getCode());
                    context.setVariable("name",user.getName());

                    String text = templateEngine.process("email_check_template",context);
                    logger.info(text);
                    helper.setText(text, true);
                    helper.setSubject(" Vous avez un CADEAU de la part de "+user.getName()+" !");
                    helper.setTo(cheque.getEmail());
                    emailSender.send(mimeMessage);
                }catch(Exception e){
                    logger.error("Exception occur while send a mail : ",e);
                }
            }
        });
        logger.info("after thread method");

    }


    @Override
    public void sendOrderMail(User user, Commande commande)  throws MailException,RuntimeException {
        logger.info("inside sendASynchronousMail method");
        quickService.submit(new Runnable() {
            @Override
            public void run() {
                try{
                    logger.info("inside thread method");
                    MimeMessage mimeMessage = emailSender.createMimeMessage();
                    MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true,"utf-8");
                    Context context = new Context();
                    Map<String, Object> model= new HashMap<>();
                    context.setVariable("name",user.getName());
                    context.setVariable("total",commande.getPrix_totale());
                    context.setVariable("numOrdre","#00"+commande.getId());
                    context.setVariable("detailCommandes",commande.getDetailCommandes());
                    String text = templateEngine.process("email_confirm.order_template",context);
                    logger.info(text);
                    helper.setText(text, true);
                    helper.setSubject("Votre commande BOO a été validé");
                    helper.setTo(user.getEmail());
                    emailSender.send(mimeMessage);
                }catch(Exception e){
                    logger.error("Exception occur while send a mail : ",e);
                }
            }
        });
        logger.info("after thread method");

    }

    @Override
    public void sendSignUpMail(User user) throws MailException,RuntimeException{
            logger.info("inside sendASynchronousMail method");
            quickService.submit(new Runnable() {
                @Override
                public void run() {
                    try{
                        logger.info("inside thread method");
                        MimeMessage mimeMessage = emailSender.createMimeMessage();
                        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true,"utf-8");
                        Context context = new Context();
                        Map<String, Object> model= new HashMap<>();
                        context.setVariable("name",user.getName());
                        context.setVariable("login",user.getEmail());
                        context.setVariable("password",user.getPassword());
                        logger.info(context.getVariable("name").toString());
                        String text = templateEngine.process("email_signup_template",context);
                        logger.info(text);
                        helper.setText(text, true);
                        helper.setSubject("Bienvenu cher BOO");
                        helper.setTo(user.getEmail());
                        emailSender.send(mimeMessage);
                    }catch(Exception e){
                        logger.error("Exception occur while send a mail : ",e);
                    }
                }
            });
            logger.info("after thread method");
    }
}

