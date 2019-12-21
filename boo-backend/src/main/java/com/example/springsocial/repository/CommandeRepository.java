package com.example.springsocial.repository;

import com.example.springsocial.model.Commande;
import com.example.springsocial.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommandeRepository extends JpaRepository<Commande, Long> {
    List<Commande> findAllByUser(User user);
}
