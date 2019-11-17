package com.example.springsocial.services;

import com.example.springsocial.model.Commande;
import com.example.springsocial.model.User;

public interface CommandeService extends GenericService<Commande> {
    Commande save(Commande commande, User user);
}
