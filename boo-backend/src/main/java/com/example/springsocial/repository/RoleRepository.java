package com.example.springsocial.repository;

import com.example.springsocial.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Set;

public interface RoleRepository extends JpaRepository<Role, Long> {
    @Query(value = "SELECT * FROM Roles where name IN (:roles)", nativeQuery = true)
    Set<Role> find(@Param("roles") List<String> roles);

    List<Role> findByName(String role);
}
