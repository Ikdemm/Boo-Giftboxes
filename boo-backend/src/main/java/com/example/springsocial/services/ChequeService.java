package com.example.springsocial.services;

import com.example.springsocial.model.Cheque;
import com.example.springsocial.model.User;

import java.util.List;
import java.util.UUID;

public interface ChequeService extends GenericService<Cheque> {
    Cheque findByCodeUser(UUID code, User user);
    Cheque findByCodePartner(UUID code, User user);
    List<Cheque> findAllByPartner( User partner);
    List<Cheque> findAllByUser(User user);
    Cheque findByCode(UUID code);

    Cheque findAndValid(UUID code);
}
