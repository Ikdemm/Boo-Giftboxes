package com.example.springsocial.controller;

import com.example.springsocial.model.Commande;
import com.example.springsocial.model.User;
import com.example.springsocial.modelDto.CommandeDto;
import com.example.springsocial.security.CurrentUser;
import com.example.springsocial.security.UserPrincipal;
import com.example.springsocial.services.CommandeService;
import com.example.springsocial.services.UserSevice;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.DataInput;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/commandes")
public class CommandeController {
    private static final Logger log = LoggerFactory.getLogger(CommandeController.class);

    @Autowired
    CommandeService commandeService;
    @Autowired
    UserSevice userSevice;
    @Autowired
    ObjectMapper objectMapper = new ObjectMapper();

    /**
     * Get List Partners
     */
    @GetMapping("/findAll")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> findAll() {
        System.out.println("monta");
        log.info(String.format("received request to list Commandes "));
        return new ResponseEntity<List<Commande>>(commandeService.findAll(), HttpStatus.OK);
    }

    /**
     * Add Partners
     */
    @PostMapping("/save")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> save(@RequestBody Commande commande, @CurrentUser UserPrincipal userPrincipal) {
        log.info(String.format("received request to save Commande "));
        User user = userSevice.findOne(userPrincipal.getId());
        return new ResponseEntity<Commande>(commandeService.save(commande, user), HttpStatus.OK);
    }

    /**
     * Delete Partner
     */
    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> Delete(@PathVariable(name = "id") Long id) {
        log.info(String.format("received request to delete Commande "));
        // try{
        commandeService.delete(id);
        return new ResponseEntity<String>("Commande deleted successufly", HttpStatus.OK);

       /* }catch (Exception e){
            return new ResponseEntity<String>("Commande not found", HttpStatus.OK);
        }*/
    }

    /**
     * Update Partner
     */
    @PutMapping("/update")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> Update(@RequestBody CommandeDto commande, @CurrentUser UserPrincipal userPrincipal) throws IOException {
        System.out.println("monta");
        log.info(String.format("received request to list Commande "));
        User user = userSevice.findOne(userPrincipal.getId());

        return new ResponseEntity<Commande>(commandeService.save(objectMapper.readValue((DataInput) commande,Commande.class), user), HttpStatus.OK);
    }
    @GetMapping("/findAllByUser")
    @PreAuthorize("hasRole('ADMIN') or hasRole('PARTNER') or  hasRole('USER')")
    public ResponseEntity<?> findAllCommandeByUser( @CurrentUser UserPrincipal userPrincipal) throws IOException {
        System.out.println("monta");
        log.info(String.format("received request to list Commande "));
        User user = userSevice.findOne(userPrincipal.getId());

        return new ResponseEntity<List<Commande>>(commandeService.findAllByUser(user), HttpStatus.OK);
    }
}
