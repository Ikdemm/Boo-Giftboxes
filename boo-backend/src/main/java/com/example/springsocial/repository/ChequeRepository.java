package com.example.springsocial.repository;

import com.example.springsocial.model.Cheque;
import com.example.springsocial.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ChequeRepository extends JpaRepository<Cheque, Long> {
    Cheque findByCode(UUID code);
    List<Cheque> findAllByClient(User client);
    List<Cheque> findAllByPartner(User partner);
}
