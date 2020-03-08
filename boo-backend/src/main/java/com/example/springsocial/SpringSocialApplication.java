package com.example.springsocial;

import com.example.springsocial.config.AppProperties;
import com.example.springsocial.config.FileStorageProperties;

import com.example.springsocial.services.CoffretService;
import com.example.springsocial.services.CommandeService;
import com.example.springsocial.services.UserSevice;
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

import org.springframework.mail.javamail.JavaMailSender;

@SpringBootApplication
@EnableConfigurationProperties({AppProperties.class, FileStorageProperties.class})
public class SpringSocialApplication implements ApplicationRunner {
    private static final Logger log = LoggerFactory.getLogger(SpringSocialApplication.class);
    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    UserSevice userSevice;
    @Autowired
    CommandeService commandeService;
    @Autowired
    CoffretService coffretService;
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
/*
        //TEST Use Case add commande
        //Get user
        User user = userSevice.findOne((long) 1);
        //Get Coffret
        Coffret coffret = coffretService.findOne((long )1);
        //add DETAIL COMMANDE
        DetailCommande detailCommande = new DetailCommande();
        detailCommande.setQuantite((long) 2);
        detailCommande.setCoffret(coffret);
        detailCommande.setPrix(detailCommande.getQuantite()*detailCommande.getCoffret().getPriceClient());
        detailCommande.setCheques(new HashSet<>());
        Cheque cheque = new Cheque();
        log.info("main");
        for(int i=0;i<detailCommande.getQuantite();i++){
            log.info(i+"");
            cheque.setEmail("garfa.monta.123@gmail.com");
            detailCommande.getCheques().add(cheque);
        }
        Commande commande = new Commande();
        commande.setUser(user);
        commande.setAddresse("monta fouchena");
        commande.setDate(new Date());
        commande.setStatus("waiting");
        Set<DetailCommande> detailCommandeSet = new HashSet<DetailCommande>();
        detailCommandeSet.add(detailCommande);
        commande.setDetailCommandes(detailCommandeSet);
        commandeService.save(commande,user);
*/
    }
}
