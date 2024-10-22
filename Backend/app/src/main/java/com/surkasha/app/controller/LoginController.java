package com.surkasha.app.controller;

import com.surkasha.app.dto.DepartmentDTO;
import com.surkasha.app.dto.LoginDTO;
import com.surkasha.app.model.Department;
import com.surkasha.app.services.DepartmentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class LoginController {

    @Autowired
    private DepartmentServices departmentServices;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO logindto) {
        // Validate the department
        Department department = departmentServices.validateDepartment(logindto.getDid(), logindto.getPassword());

        if (department != null) {

            // Convert the Department entity to DepartmentDTO
            DepartmentDTO departmentDTO = departmentServices.convertToDTO(department);
            return ResponseEntity.status(200).body(departmentDTO);  // Return the DTO instead of a success message

        } else {
            return ResponseEntity.status(401).body(Map.of("success", false, "message", "Invalid Department ID or password"));
        }
    }
}
