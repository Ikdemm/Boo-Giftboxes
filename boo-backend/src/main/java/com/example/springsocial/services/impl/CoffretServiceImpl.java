package com.example.springsocial.services.impl;

import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.Coffret;
import com.example.springsocial.repository.CoffretRepository;
import com.example.springsocial.services.CoffretService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CoffretServiceImpl implements CoffretService {
    /**
     * ToDo
     * load images
     */
    @Autowired
    CoffretRepository coffretRepository;

    @Override
    public Coffret save(Coffret coffret) {
        return coffretRepository.save(coffret);
    }

    @Override
    public List<Coffret> findAll() {
        return coffretRepository.findAll();
    }

    @Override
    public Coffret findOne(Long id) {
        return coffretRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Coffrer", "id", id));
    }

    @Override
    public void delete(Long id) {
        this.findOne(id);
        coffretRepository.deleteById(id);
    }

    @Override
    public Long count() {
        return coffretRepository.count();
    }
}
