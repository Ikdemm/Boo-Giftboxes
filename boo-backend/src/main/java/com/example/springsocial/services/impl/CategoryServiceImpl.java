package com.example.springsocial.services.impl;

import com.example.springsocial.exception.BadRequestException;
import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.Category;
import com.example.springsocial.repository.CategoryRepository;
import com.example.springsocial.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    CategoryRepository categoryRepository;

    @Override
    public Category save(Category category) {
        try {
            category = categoryRepository.save(category);
            return category;

        } catch (Exception e) {
            throw new BadRequestException("Category Name: " + category.getName() + " is already exist");
        }
    }

    @Override
    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    @Override
    public Category findOne(Long id) {
        return categoryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Category", "id", id));
    }

    @Override
    public void delete(Long id) {
        this.findOne(id);
        categoryRepository.deleteById(id);
    }

    @Override
    public Long count() {
        return categoryRepository.count();
    }

    @Override
    public Category findByName(String name) {
        try {
            Category category = categoryRepository.findByName(name);
            return category;

        } catch (Exception e) {
            throw new ResourceNotFoundException("Category", "name", name);
        }
    }
}
