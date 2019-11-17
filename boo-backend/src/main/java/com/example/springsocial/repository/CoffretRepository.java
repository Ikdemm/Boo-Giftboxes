package com.example.springsocial.repository;

import com.example.springsocial.model.Coffret;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoffretRepository extends JpaRepository<Coffret, Long> {
}
