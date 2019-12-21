package com.example.springsocial.services;

import com.example.springsocial.model.User;
import com.example.springsocial.security.UserPrincipal;

import java.util.List;

public interface UserSevice extends GenericService<User> {
    User save(User user, String role);
    User update(UserPrincipal userPrincipal,User user);
    List<User> findAllByRole(String role);

    List<User> findPartnerByCategory(Long id);

    void ResetPassword(String email);
}
