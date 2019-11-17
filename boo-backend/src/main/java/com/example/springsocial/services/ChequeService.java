package com.example.springsocial.services;

import com.example.springsocial.model.Cheque;

import java.util.UUID;

public interface ChequeService extends GenericService<Cheque> {
    Cheque findByCode(UUID code);
}
