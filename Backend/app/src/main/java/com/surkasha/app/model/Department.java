package com.surkasha.app.model;

import ch.qos.logback.core.model.INamedModel;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Department {

    @Id
    private Integer did;

    private String D_Name;

    private String password;

}
