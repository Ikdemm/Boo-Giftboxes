package com.example.springsocial;

import com.example.springsocial.config.AppProperties;
import com.example.springsocial.config.FileStorageProperties;
import com.example.springsocial.controller.AuthController;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

@SpringBootApplication
@EnableConfigurationProperties({AppProperties.class, FileStorageProperties.class})
public class SpringSocialApplication implements ApplicationRunner {
    private static final Logger log = LoggerFactory.getLogger(SpringSocialApplication.class);
    @Autowired
    private JavaMailSender javaMailSender;
    public static void main(String[] args) {
        SpringApplication.run(SpringSocialApplication.class, args);
    }

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        log.info("/**************************************************/");
        log.info("Garfa Montassar Debug");
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo("garfa.monta.123@gmail.com");

        msg.setSubject("Testing from Spring Boot");
        msg.setText("Hello World \n Spring Boot Email");

        javaMailSender.send(msg);

    }
}
