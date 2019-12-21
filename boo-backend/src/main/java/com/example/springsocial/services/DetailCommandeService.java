package com.example.springsocial.services;

import com.example.springsocial.model.DetailCommande;
import com.example.springsocial.model.User;

public interface DetailCommandeService extends GenericService<DetailCommande> {
    DetailCommande save(DetailCommande object, User user);

}
