package com.example.springsocial.services;

import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public interface FileStorageService {
    String storeFile(MultipartFile file);

    Resource loadFileAsResource(String fileName);

    ResponseEntity<?> loadFile(String fileName, HttpServletRequest request) throws IOException;
}
