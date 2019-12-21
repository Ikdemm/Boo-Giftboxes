package com.example.springsocial.controller;

import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.User;
import com.example.springsocial.repository.UserRepository;
import com.example.springsocial.security.CurrentUser;
import com.example.springsocial.security.UserPrincipal;
import com.example.springsocial.services.UserSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserSevice userSevice;

    @GetMapping("/me")
    @PreAuthorize("hasRole('ADMIN') or hasRole('PARTNER') or hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        System.out.println("MONTA");
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }
    @PutMapping("/update")
    @PreAuthorize("hasRole('ADMIN') or hasRole('PARTNER') or hasRole('USER')")
    public User updateUser(@CurrentUser UserPrincipal userPrincipal, @RequestBody User user) {

        return userSevice.update(userPrincipal,user) ;
    }
}
