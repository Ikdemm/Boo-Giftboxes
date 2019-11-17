package com.example.springsocial.services.impl;

import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.Cheque;
import com.example.springsocial.repository.ChequeRepository;
import com.example.springsocial.services.ChequeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class ChequeServiceImpl implements ChequeService {
    @Autowired
    ChequeRepository chequeRepository;

    @Override
    public Cheque findByCode(UUID code) {
        return chequeRepository.findByCode(code);
    }

    @Override
    public Cheque save(Cheque object) {
        UUID code = UUID.randomUUID();
        object.setDate(new Date());
        object.setStatus("INVALID");
        while (this.findByCode(code) != null) {
            code = UUID.randomUUID();
        }
        object.setCode(code);
        return chequeRepository.save(object);
    }

    @Override
    public Cheque findOne(Long id) {
        return chequeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Cheque", "id", id));
    }

    @Override
    public List<Cheque> findAll() {
        return chequeRepository.findAll();
    }

    @Override
    public void delete(Long id) {
        this.findOne(id);
        chequeRepository.deleteById(id);
    }

    @Override
    public Long count() {
        return chequeRepository.count();
    }
}
