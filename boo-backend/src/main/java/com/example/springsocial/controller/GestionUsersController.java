package com.example.springsocial.controller;

import com.example.springsocial.exception.BadRequestException;
import com.example.springsocial.model.AuthProvider;
import com.example.springsocial.model.Role;
import com.example.springsocial.model.User;
import com.example.springsocial.modelDto.PartnerDto;
import com.example.springsocial.repository.RoleRepository;
import com.example.springsocial.services.EmailService;
import com.example.springsocial.services.FileStorageService;
import com.example.springsocial.services.UserSevice;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Controller
@RequestMapping("/users")
public class GestionUsersController {
    public static final String SUCCESS = "success";
    public static final String ROLE_ADMIN = "ROLE_ADMIN";
    public static final String ROLE_USER = "ROLE_USER";
    private static final Logger log = LoggerFactory.getLogger(GestionUsersController.class);
    ObjectMapper objectMapper = new ObjectMapper();
    @Autowired
    FileStorageService fileStorageService;
    @Autowired
    UserSevice userSevice;
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private EmailService emailService;
    /**
     * Get List Partners
     */
    @GetMapping("/listPartners")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> listPartners() {
        System.out.println("monta");
        log.info(String.format("received request to list Partners "));
        return new ResponseEntity<List<User>>(userSevice.findAllByRole("PARTNER"), HttpStatus.OK);
    }

    /**
     * Get List Partners
     */
    @GetMapping("/listPartnersByCategory/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> listPartnersByCategory(@PathVariable(name = "id") Long id) {
        System.out.println("monta");
        log.info(String.format("received request to list Partners By Category"));
        return new ResponseEntity<List<User>>(userSevice.findPartnerByCategory(id), HttpStatus.OK);
    }

    /**
     * Add Partners
     */
    @PostMapping("/savePatner")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> savePartner(@RequestParam("image") MultipartFile image, @RequestParam("model") String model) throws IOException {
        log.info(String.format("received request to save Partner "));

        log.info(model);
        log.info(image.getOriginalFilename());
        PartnerDto partnerDto = objectMapper.readValue(model, PartnerDto.class);
        partnerDto.setImageUrl(image.getOriginalFilename());
        //  fileStorageService.storeFile(image);

        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();
        Set<ConstraintViolation<PartnerDto>> violations = validator.validate(partnerDto);
        for (ConstraintViolation<PartnerDto> violation : violations) {
            throw new BadRequestException(violation.getPropertyPath() + " " + violation.getMessage());
        }

        User user = modelMapper.map(partnerDto, User.class);
        emailService.sendPartnertAddMail(user);
        user.setEmailVerified(false);
        user.setProvider(AuthProvider.local);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Set<Role> roles = new HashSet<Role>(roleRepository.findByName("PARTNER"));
        user.setRoles(roles);
        Set<ConstraintViolation<User>> violations1 = validator.validate(user);

        for (ConstraintViolation<User> violation : violations1) {
            System.out.println(violation.getPropertyPath() + " " + violation.getMessage());
            throw new BadRequestException(violation.getPropertyPath() + " " + violation.getMessage());
        }
        fileStorageService.storeFile(image);
        return new ResponseEntity<User>(userSevice.save(user), HttpStatus.OK);
        //return new ResponseEntity<User>(userSevice.save(user), HttpStatus.OK);
        // return new ResponseEntity<User>(userSevice.save(user), HttpStatus.OK);
    }

    /**
     * Delete Partner
     */
    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> DeletePartner(@PathVariable(name = "id") Long id) {
        System.out.println("monta");
        log.info(String.format("received request to list Partners "));
        try {
            userSevice.delete(id);
            return new ResponseEntity<String>("User deleted successufly", HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<String>("User not found", HttpStatus.OK);
        }
    }

    /**
     * Update Partner
     */
    //@PreAuthorize("hasRole('ADMIN')")
    /*@PutMapping("/update")
    public ResponseEntity<?> UpdatePartner(@RequestBody User user) {
        System.out.println("monta");
        log.info(String.format("received request to list Partners "));
        return new ResponseEntity<User>(userSevice.save(user, "PARTNER"), HttpStatus.OK);
    }*/

    @GetMapping("/imageDownload/{fileName}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> downloadFile(@PathVariable String fileName, HttpServletRequest request) throws IOException {
        return fileStorageService.loadFile(fileName, request);
    }

}
