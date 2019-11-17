package com.example.springsocial.controller;

import com.example.springsocial.model.Cheque;
import com.example.springsocial.services.ChequeService;
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

    @GetMapping("/findByCode/{code}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> findByCodecheque(@PathVariable(name = "code") UUID code) {
        System.out.println("monta");
        log.info(String.format("received request to find Cheque by code"));
        return new ResponseEntity<Cheque>(chequeService.findByCode(code), HttpStatus.OK);
    }


    /**
     * Update Partner
     */
    @PutMapping("/update")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> Update(@RequestBody Cheque cheque) {
        System.out.println("monta");
        log.info(String.format("received request update Cheque "));
        return new ResponseEntity<Cheque>(chequeService.save(cheque), HttpStatus.OK);
    }
}
