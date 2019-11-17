package com.example.springsocial.repository;

import com.example.springsocial.model.Category;
import com.example.springsocial.model.Role;
import com.example.springsocial.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    Boolean existsByEmail(String email);

    List<User> findAllByRoles(Set<Role> role);

    List<User> findAllByRolesAndCategory(Set<Role> roles, Category category);
}
