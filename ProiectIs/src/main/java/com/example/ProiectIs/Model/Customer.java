package com.example.ProiectIs.Model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data

public class Customer {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    private String customerName;
    private Integer age;
    private String password;
    private String email;

    private Integer admin;

    private Integer wage;

    @OneToMany
    private List<BarOrder> barOrderList;
    @OneToMany
    private List<Pc> pcList;
    @OneToMany
    private  List<Console> consoleList;

    public Customer(String customerName, Integer age, String password, String email) {
        this.customerName = customerName;
        this.age = age;
        this.password = password;
        this.email = email;
    }
}
