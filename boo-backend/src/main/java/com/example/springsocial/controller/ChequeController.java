package com.example.springsocial.controller;

import com.example.springsocial.model.Cheque;
import com.example.springsocial.model.User;
import com.example.springsocial.security.CurrentUser;
import com.example.springsocial.security.UserPrincipal;
import com.example.springsocial.services.ChequeService;
import com.example.springsocial.services.UserSevice;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@Controller
@RequestMapping("/cheques")
public class ChequeController {
    private static final Logger log = LoggerFactory.getLogger(CoffretController.class);
    @Autowired
    ChequeService chequeService;
    @Autowired
    UserSevice userSevice;
    /**
     * Get List Cheques
     */
    @GetMapping("/findAll")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> findAll() {
        System.out.println("monta");
        log.info(String.format("received request to list Cheque "));
        return new ResponseEntity<List<Cheque>>(chequeService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/validChequeUser/{code}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> validChequeUser(@PathVariable(name = "code") UUID code,@CurrentUser UserPrincipal userPrincipal) {
        System.out.println("monta");
        log.info(String.format("received request to list Commande "));
        User user = userSevice.findOne(userPrincipal.getId());
        log.info(code.toString());
        log.info(String.format("received request to find Cheque by code"));
        return new ResponseEntity<Cheque>(chequeService.findByCodeUser(code,user), HttpStatus.OK);
    }
    @GetMapping("/validChequePartner/{code}")
    @PreAuthorize("hasRole('PARTNER')")
    public ResponseEntity<?> validChequePartner(@PathVariable(name = "code") UUID code,@CurrentUser UserPrincipal userPrincipal) {
        System.out.println("monta");
        log.info(String.format("received request to list Commande "));
        User user = userSevice.findOne(userPrincipal.getId());
        log.info(code.toString());
        log.info(String.format("received request to find Cheque by code"));
        return new ResponseEntity<Cheque>(chequeService.findByCodePartner(code,user), HttpStatus.OK);
    }


    /**
     * Update Partner
     */
    @PutMapping("/update")
    @PreAuthorize("hasRole('ADMIN') or hasRole('PARTNER') or  hasRole('USER')")
    public ResponseEntity<?> Update(@RequestBody Cheque cheque) {
        System.out.println("monta");
        log.info(String.format("received request update Cheque "));
        return new ResponseEntity<Cheque>(chequeService.save(cheque), HttpStatus.OK);
    }

    @GetMapping("/findAllByUser")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> findAllByUser(@CurrentUser UserPrincipal userPrincipal) {
        System.out.println("monta");
        log.info(String.format("received request to list Cheque "));
        User user = userSevice.findOne(userPrincipal.getId());

        return new ResponseEntity<List<Cheque>>(chequeService.findAllByUser(user), HttpStatus.OK);
    }
    @GetMapping("/findAllByPartner")
    @PreAuthorize("hasRole('PARTNER')")
    public ResponseEntity<?> findAllByPartner(@CurrentUser UserPrincipal userPrincipal) {
        System.out.println("monta");
        log.info(String.format("received request to list Cheque "));
        User user = userSevice.findOne(userPrincipal.getId());

        return new ResponseEntity<List<Cheque>>(chequeService.findAllByPartner(user), HttpStatus.OK);
    }
}
