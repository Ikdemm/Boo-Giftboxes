package com.example.springsocial.services.impl;

import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.Cheque;
import com.example.springsocial.model.DetailCommande;
import com.example.springsocial.model.User;
import com.example.springsocial.repository.DetailCommandeRepository;
import com.example.springsocial.services.ChequeService;
import com.example.springsocial.services.DetailCommandeService;
import com.example.springsocial.services.EmailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class DetailCommandeServiceImpl implements DetailCommandeService {
    @Autowired
    DetailCommandeRepository detailCommandeRepository;
    @Autowired
    ChequeService chequeService;
    private static final Logger log = LoggerFactory.getLogger(DetailCommandeService.class);
    @Autowired
    EmailService emailService;
    @Override
    public DetailCommande save(DetailCommande object, User user) {
        log.info("save detail commande");
        log.info("coffret quantite: "+object.getQuantite());
        log.info("coffret price: "+object.getCoffret().getPriceClient());

        object.setPrix(object.getCoffret().getPriceClient() * object.getQuantite());
        Set<Cheque> cheques = new HashSet<Cheque>();
        log.info(cheques.size()+"");
        /**
         * TODO
         * FIX CHEQUE not mutch to quantite
         */
        object.getCheques().forEach(cheque -> {
            cheque.setDate(new Date());
            cheque.setCoffret(object.getCoffret());
            cheque = chequeService.save(cheque);
            cheques.add(cheque);
            log.info("afer submit email");
            /**
             * TODO GENERATE QR CODE TO EACH CHEQUE AND SEND IT WITH EMAIL
             */
            /**
             * TODO GENERATE QR CODE
             */

            emailService.sendChequeMail(cheque,user);

        });
        object.setCheques(cheques);
        return detailCommandeRepository.save(object);
    }

    @Override
    public DetailCommande save(DetailCommande object) {
        return null;
    }

    @Override
    public DetailCommande findOne(Long id) {
        return detailCommandeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Detail Commande", "id", id));
    }

    @Override
    public List<DetailCommande> findAll() {
        return detailCommandeRepository.findAll();
    }

    @Override
    public void delete(Long id) {
        this.findOne(id);
        detailCommandeRepository.deleteById(id);
    }

    @Override
    public Long count() {
        return detailCommandeRepository.count();
    }

}
