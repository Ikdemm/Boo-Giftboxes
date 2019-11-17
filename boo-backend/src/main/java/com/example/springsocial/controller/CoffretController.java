package com.example.springsocial.controller;

import com.example.springsocial.exception.BadRequestException;
import com.example.springsocial.model.Coffret;
import com.example.springsocial.services.CoffretService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.io.IOException;
import java.util.List;
import java.util.Set;

@Controller
@RequestMapping("/coffrets")
public class CoffretController {
    private static final Logger log = LoggerFactory.getLogger(CoffretController.class);
    ObjectMapper objectMapper = new ObjectMapper();

    @Autowired
    CoffretService coffretService;

    /**
     * Get List Boxes
     */
    @GetMapping("/findAll")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> findAll() {
        System.out.println("monta");
        log.info(String.format("received request to list Coffrets "));
        return new ResponseEntity<List<Coffret>>(coffretService.findAll(), HttpStatus.OK);
    }

    /**
     * Get List Boxes for Clients
     */

    @GetMapping("/getBoxes")
    public ResponseEntity<?> getBoxes() {
        System.out.println("monta");
        log.info(String.format("received request to list Coffrets "));
        return new ResponseEntity<List<Coffret>>(coffretService.findAll(), HttpStatus.OK);
    }


    /**
     * Add Box
     */
    @PostMapping("/save")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> save(@RequestParam("image") MultipartFile image, @RequestParam("catalog") MultipartFile catalog, @RequestParam("model") String model) throws IOException {
        log.info(model);
        Coffret coffret = objectMapper.readValue(model, Coffret.class);
        log.info(coffret.getDescription());
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();
        Set<ConstraintViolation<Coffret>> violations = validator.validate(coffret);
        for (ConstraintViolation<Coffret> violation : violations) {
            throw new BadRequestException(violation.getInvalidValue() + " " + violation.getMessage());
        }
        System.out.println("monta");
        log.info(String.format("received request to save Coffret "));
        return new ResponseEntity<Coffret>(coffretService.save(coffret), HttpStatus.OK);
    }

    /**
     * Delete Box
     */
    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> Delete(@PathVariable(name = "id") Long id) {
        log.info(String.format("received request to delete Coffret "));
        try {
            coffretService.delete(id);
            return new ResponseEntity<String>("Coffret deleted successufly", HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<String>("Coffret not found", HttpStatus.OK);
        }
    }

    /**
     * Update Partner
     */
    @PutMapping("/update")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> Update(@RequestBody Coffret coffret) {
        System.out.println("monta");
        log.info(String.format("received request to list Partners "));
        return new ResponseEntity<Coffret>(coffretService.save(coffret), HttpStatus.OK);
    }
}
