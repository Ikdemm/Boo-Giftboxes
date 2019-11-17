package com.example.springsocial.services.impl;

import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.Cheque;
import com.example.springsocial.model.DetailCommande;
import com.example.springsocial.repository.DetailCommandeRepository;
import com.example.springsocial.services.ChequeService;
import com.example.springsocial.services.DetailCommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class DetailCommandeServiceImpl implements DetailCommandeService {
    @Autowired
    DetailCommandeRepository detailCommandeRepository;
    @Autowired
    ChequeService chequeService;

    @Override
    public DetailCommande save(DetailCommande object) {
        object.setPrice(object.getCoffret().getPriceClient() * object.getQuantite());
        Set<Cheque> cheques = new HashSet<Cheque>();
        for (int i = 0; i < object.getQuantite(); i++) {
            cheques.add(chequeService.save(new Cheque()));
        }
        object.setCheques(cheques);
        return detailCommandeRepository.save(object);
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
   /* @Override
    public DetailCommande save(DetailCommande detailCommande) {
        return detailCommandeRepository.save(detailCommande);
    }

    @Override
    public List<DetailCommande> findAll() {
        return detailCommandeRepository.findAll();
    }

    @Override
    public DetailCommande findOne(long id) {
        return detailCommandeRepository.findById(id).get();
    }

    @Override
    public void delete(long id) {
        detailCommandeRepository.deleteById(id);
    }*/
}
