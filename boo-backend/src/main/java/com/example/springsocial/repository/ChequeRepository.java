package com.example.springsocial.repository;

import com.example.springsocial.model.Cheque;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ChequeRepository extends JpaRepository<Cheque, Long> {
    Cheque findByCode(UUID code);
}
