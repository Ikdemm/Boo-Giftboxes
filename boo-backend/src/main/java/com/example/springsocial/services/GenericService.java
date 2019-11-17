package com.example.springsocial.services;

import java.util.List;

public interface GenericService<T extends Object> {
    T save(T object);

    T findOne(Long id);

    List<T> findAll();

    void delete(Long id);

    Long count();
}
