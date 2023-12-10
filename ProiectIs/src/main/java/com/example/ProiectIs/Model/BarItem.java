package com.example.ProiectIs.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data

public class BarItem {
    @Id
    private Integer id;
    private Integer price;
    private String description;
}
