package com.surkasha.app.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CosrController {

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/api/data")
    public String getData() {
        return "CORS enabled for this endpoint";
    }
}
