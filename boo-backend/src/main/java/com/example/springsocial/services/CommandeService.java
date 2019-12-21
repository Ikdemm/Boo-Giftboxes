package com.example.springsocial.services;

import com.example.springsocial.model.Commande;
import com.example.springsocial.model.User;

import java.util.List;

public interface CommandeService extends GenericService<Commande> {
    Commande save(Commande commande, User user);
    List<Commande> findAllByUser(User user);
}
