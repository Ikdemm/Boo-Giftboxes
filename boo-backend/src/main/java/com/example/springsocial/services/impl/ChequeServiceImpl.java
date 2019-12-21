package com.example.springsocial.services.impl;

import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.Category;
import com.example.springsocial.model.Cheque;
import com.example.springsocial.model.User;
import com.example.springsocial.model.enumClasses.ChequeStatusEnum;
import com.example.springsocial.repository.ChequeRepository;
import com.example.springsocial.services.ChequeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class ChequeServiceImpl implements ChequeService {
    @Autowired
    ChequeRepository chequeRepository;
    private static final Logger log = LoggerFactory.getLogger(ChequeServiceImpl.class);

    @Override
    public Cheque findByCodeUser(UUID code, User user) {
            Cheque cheque = chequeRepository.findByCode(code);
            if(cheque!=null && cheque.getStatus()==ChequeStatusEnum.initial){
                cheque.setClient(user);
                cheque.setStatus(ChequeStatusEnum.checkedByUser);
                return chequeRepository.save(cheque);
            }
            else{
                throw new ResourceNotFoundException("Cheque", "code", code);
            }


    }

    @Override
    public Cheque findByCodePartner(UUID code, User user) {
        Cheque cheque = chequeRepository.findByCode(code);
        if(cheque!=null && cheque.getStatus()==ChequeStatusEnum.checkedByUser){
            cheque.setPartner(user);
            cheque.setStatus(ChequeStatusEnum.checkedByPartner);
            return chequeRepository.save(cheque);
        }
        else{
            throw new ResourceNotFoundException("Cheque", "code", code);
        }


    }

    @Override
    public List<Cheque> findAllByPartner(User partner) {
        return chequeRepository.findAllByPartner(partner);
    }

    @Override
    public List<Cheque> findAllByUser(User user) {
        return chequeRepository.findAllByClient(user);
    }


    @Override
    public Cheque findByCode(UUID code) {
        return chequeRepository.findByCode(code);
    }

    @Override
    public Cheque findAndValid(UUID code) {
        return null;
    }


    @Override
    public Cheque save(Cheque object) {
        UUID code = UUID.randomUUID();
        log.info("/**************************/");
        log.info(code.toString()    );
        object.setDate(new Date());
        object.setStatus(ChequeStatusEnum.initial);
        while (this.findByCode(code) != null) {
            log.info(code.toString());
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
