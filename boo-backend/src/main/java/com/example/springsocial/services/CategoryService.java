package com.example.springsocial.services;

import com.example.springsocial.model.Category;

public interface CategoryService extends GenericService<Category> {
    Category findByName(String name);
}
