package com.example.springsocial.services.impl;

import com.example.springsocial.exception.BadRequestException;
import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.AuthProvider;
import com.example.springsocial.model.Category;
import com.example.springsocial.model.Role;
import com.example.springsocial.model.User;
import com.example.springsocial.repository.RoleRepository;
import com.example.springsocial.repository.UserRepository;
import com.example.springsocial.security.UserPrincipal;
import com.example.springsocial.services.CategoryService;
import com.example.springsocial.services.UserSevice;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserSeviceImpl implements UserSevice {
    private static final Logger log = LoggerFactory.getLogger(UserSeviceImpl.class);
    @Autowired
    CategoryService categoryService;
    @Autowired
    UserRepository userRepository;
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public User save(User user, String role) {

        User userWithDuplicateEmail = userRepository.findByEmail(user.getEmail()).get();
        if (userWithDuplicateEmail != null && user.getId() != userWithDuplicateEmail.getId()) {
            log.error(String.format("Duplicate email ", user.getEmail()));
            throw new BadRequestException("Email: " + user.getEmail() + " is already exist");
        }
        User user1 = new User();
        user.setName(user.getName());
        user.setEmail(user.getEmail());
        user.setPassword(user.getPassword());
        user.setProvider(AuthProvider.local);

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Set<Role> roles = new HashSet<Role>(roleRepository.findByName(role));
        user.setRoles(roles);
        user1 = userRepository.save(user);

        return user1;
    }

    @Override
    public User update(UserPrincipal userPrincipal,User user) {
        log.info("user password: "+userPrincipal.getPassword());
        user.setPassword(userPrincipal.getPassword());
        return userRepository.save(user);
    }

    @Override
    public User save(User user) {
        System.out.println(user.getEmail());
        Optional<User> userWithDuplicateEmail = userRepository.findByEmail(user.getEmail());
        System.out.println(userWithDuplicateEmail.isPresent());
        if (userWithDuplicateEmail.isPresent()) {
            log.error(String.format("Duplicate email ", user.getEmail()));
            throw new BadRequestException("Email: " + user.getEmail() + " is already exist");
        }
        user = userRepository.save(user);
        /**
         *  TODO SEND MAIL CONFIRMATION
         */
        return  user;
    }

    @Override
    public User findOne(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public void delete(Long id) {
        this.findOne(id);
        userRepository.deleteById(id);
    }

    @Override
    public Long count() {
        return userRepository.count();
    }

    @Override
    public List<User> findAllByRole(String role) {
        Set<Role> roles = new HashSet<Role>(roleRepository.findByName(role));
        List<User> users = userRepository.findAllByRoles(roles);
        return users;

    }

    @Override
    public List<User> findPartnerByCategory(Long id) {
        Category category = this.categoryService.findOne(id);
        Set<Role> roles = new HashSet<Role>(roleRepository.findByName("PARTNER"));
        List<User> users = userRepository.findAllByRolesAndCategory(roles, category);

        return users;
    }

    @Override
    public void ResetPassword(String email) {
        /**
         *  TODO Reset password Method
         */
    }


    @PostConstruct
    private void setupDefaultUser() {
        log.info("User Count " + userRepository.count());
        log.info("Role Count " + roleRepository.count());
        if (roleRepository.count() == 0) {
            /** Save Role ADMIN */
            Role roleAdmin = new Role();
            roleAdmin.setName("ADMIN");
            roleRepository.save(roleAdmin);
            /** Save Role USER */
            Role roleUser = new Role();
            roleUser.setName("USER");
            roleRepository.save(roleUser);
            /** Save Role PARTNER */
            Role rolePartner = new Role();
            rolePartner.setName("PARTNER");
            roleRepository.save(rolePartner);
            log.info("Role Count " + roleRepository.count());

        }
        /** just to make sure there is an ADMIN user exist in the database for testing purpose */

        if (userRepository.count() == 0) {
            log.info(roleRepository.findByName("ADMIN").size() + "");
            User user = new User();
            user.setName("ADMIN");
            user.setEmail("ADMIN@gmail.com");
            user.setPassword("ADMIN");
            user.setProvider(AuthProvider.local);

            user.setPassword(passwordEncoder.encode(user.getPassword()));
            Set<Role> roles = new HashSet<Role>(roleRepository.findByName("ADMIN"));
            user.setRoles(roles);
            userRepository.save(user);
            log.info("User Count " + userRepository.count());
        }

    }
}
