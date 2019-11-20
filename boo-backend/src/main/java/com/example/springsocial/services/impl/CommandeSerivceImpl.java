package com.example.springsocial.services.impl;

import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.Commande;
import com.example.springsocial.model.User;
import com.example.springsocial.repository.CommandeRepository;
import com.example.springsocial.services.CommandeService;
import com.example.springsocial.services.DetailCommandeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
public class CommandeSerivceImpl implements CommandeService {
    private static final Logger log = LoggerFactory.getLogger(CommandeSerivceImpl.class);
    /**
     * ToDo
     * Save commande with coffret
     * generate cheque
     * check status
     * check cheque status
     * purshase
     */
    @Autowired
    CommandeRepository commandeRepository;
    @Autowired
    DetailCommandeService detailCommandeService;

    @Override
    public Commande save(Commande commande, User user) {
        log.info(user.getEmail());
        commande.setUser(user);
        commande.setPrix_totale(Long.valueOf(0));
        log.info(String.valueOf(commande.getDetailCommandes().size()));
        commande.getDetailCommandes().forEach(detailCommande -> {
            log.info("quantite detail Commande "+detailCommande.getQuantite());
            log.info(detailCommande.getPrix()+"");
            detailCommande = detailCommandeService.save(detailCommande);
            commande.setPrix_totale(commande.getPrix_totale() + detailCommande.getPrix());
        });
        /**
         *  SEND MAIL ORDER CONFIRMATION
         */
        log.info("AFTER SEND EMAIL AND BEFORE SUBMIT COMMANDE");
        return commandeRepository.save(commande);
    }

    @Override
    public List<Commande> findAll() {

        return commandeRepository.findAll();
    }

    @Override
    public Commande save(Commande object) {
        return commandeRepository.save(object);
    }

    @Override
    public Commande findOne(Long id) {
        return commandeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Commande", "id", id));
    }

    @Override
    public void delete(Long id) {
        this.findOne(id);
        commandeRepository.deleteById(id);
    }

    @Override
    public Long count() {
        return null;
    }

    @PostConstruct
    private void setupDefaultCommande() {

        log.info("Commande Count " + commandeRepository.count());
        log.info("DetailCommande Count " + detailCommandeService.count());
        if (commandeRepository.count() == 0) {
/*
            DetailCommande detailCommande = new DetailCommande();
            detailCommande.setPrice(Integer.toUnsignedLong(100));
            detailCommande.setQuantite(Integer.toUnsignedLong(200));
            detailCommande = detailCommandeRepository.save(detailCommande);
            log.info("DetailCommande Count "+ detailCommandeRepository.count());
            log.info("DetailCommande id "+ detailCommande.getId());
            Commande commande = new Commande();
            commande.setAddresse("monta");
            commande.setDate(new Date());
            commande.setPrix_totale(Integer.toUnsignedLong(100));
            commande.setStatus("status");
            Set<DetailCommande> detailCommandes = new HashSet<>();
            detailCommandes.add(detailCommande);
            commande.setDetailCommandes(detailCommandes);
            commande = commandeRepository.save(commande);
            log.info("Commande Count "+ commandeRepository.count());
            log.info("Commande id "+ commande.getId());*/

        }
    }
}
