package com.example.ProiectIs.DTO;

import com.example.ProiectIs.Model.BarItem;
import com.example.ProiectIs.Model.Customer;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class CustomerItem {
    private Customer customer;
    private BarItem barItem;
}
