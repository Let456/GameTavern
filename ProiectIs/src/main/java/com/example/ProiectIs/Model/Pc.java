package com.example.ProiectIs.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data

public class Pc {

    @Id
    private Integer id;
    private Integer pricePerHour;
    private Integer pcType;
    @OneToMany
    private List<Customer> customerList;

}
