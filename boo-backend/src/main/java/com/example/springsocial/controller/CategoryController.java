package com.example.springsocial.controller;

import com.example.springsocial.exception.BadRequestException;
import com.example.springsocial.model.Category;
import com.example.springsocial.services.CategoryService;
import com.example.springsocial.services.FileStorageService;
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

import javax.servlet.http.HttpServletRequest;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.io.IOException;
import java.util.List;
import java.util.Set;


@Controller
@RequestMapping("/categories")
public class CategoryController {
    private static final Logger log = LoggerFactory.getLogger(GestionUsersController.class);
    ObjectMapper objectMapper = new ObjectMapper();

    @Autowired
    CategoryService categoryService;
    @Autowired
    FileStorageService fileStorageService;

    @GetMapping("/findAll")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> listCatalogues() {
        System.out.println("monta");
        log.info(String.format("received request to list Categories "));
        return new ResponseEntity<List<Category>>(categoryService.findAll(), HttpStatus.OK);
    }

    /**
     * Get Categories for Normal User
     */

    @GetMapping("/getCategories")
    public ResponseEntity<?> getCatalogues() {
        System.out.println("monta");
        log.info(String.format("received request to list Categories "));
        return new ResponseEntity<List<Category>>(categoryService.findAll(), HttpStatus.OK);
    }

    /**
     * Add Category
     */
    @PostMapping("/save")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> save(@RequestParam("icon") MultipartFile icon, @RequestParam("model") String model) throws IOException {
        log.info(model);
        log.info(icon.getOriginalFilename());
        Category category = objectMapper.readValue(model, Category.class);
        category.setImageUrl(icon.getOriginalFilename());
        fileStorageService.storeFile(icon);
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();
        Set<ConstraintViolation<Category>> violations = validator.validate(category);
        for (ConstraintViolation<Category> violation : violations) {
            throw new BadRequestException(violation.getInvalidValue() + " " + violation.getMessage());
        }
        System.out.println("monta");
        log.info(String.format("received request to save Coffret "));

        return new ResponseEntity<Category>(categoryService.save(category), HttpStatus.OK);
    }

    @GetMapping("/findByName/{name}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> findByName(@PathVariable(name = "name") String name) throws IOException {
        return new ResponseEntity<Category>(categoryService.findByName(name), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> delete(@PathVariable(name = "id") Long id) {
        log.info(String.format("received request to delete Category "));
        try {
            categoryService.delete(id);
            return new ResponseEntity<String>("Category deleted successufly", HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<String>("Category not found", HttpStatus.OK);
        }
    }

    @GetMapping("/iconDownload/{fileName}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> downloadFile(@PathVariable String fileName, HttpServletRequest request) throws IOException {
        return fileStorageService.loadFile(fileName, request);
    }


}
