package com.example.springsocial.services;

import com.example.springsocial.model.User;

import java.util.List;

public interface UserSevice extends GenericService<User> {
    User save(User user, String role);

    List<User> findAllByRole(String role);

    List<User> findPartnerByCategory(Long id);
}
