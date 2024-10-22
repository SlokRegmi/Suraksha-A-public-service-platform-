package com.surkasha.app.repository;

import com.surkasha.app.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<Department, Integer> {

}
