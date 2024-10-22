package com.surkasha.app.services;

import com.surkasha.app.dto.DepartmentDTO;
import com.surkasha.app.model.Department;
import com.surkasha.app.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DepartmentServices {

    @Autowired
    private LoginRepository loginRepository;

    // Validate the department and return the Department entity
    public Department validateDepartment(Integer did, String password) {

        Optional<Department> departmentOptional = loginRepository.findById(did);

        if (departmentOptional.isPresent()) {
            Department department = departmentOptional.get();
            String departmentPassword = department.getPassword();

            if (departmentPassword != null && departmentPassword.equals(password)) {
                return department;  // Return the Department entity if validation is successful
            }
        }
        return null;
    }

    // Method to convert Department entity to DepartmentDTO
    public DepartmentDTO convertToDTO(Department department) {
        DepartmentDTO departmentDTO = new DepartmentDTO();
        departmentDTO.setDid(department.getDid());
        departmentDTO.setD_Name(department.getD_Name());
        return departmentDTO;
    }
}
