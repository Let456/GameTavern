package com.example.ProiectIs.Service;

import com.example.ProiectIs.Model.Customer;
import org.springframework.stereotype.Component;

@Component
public interface CustomerService {
    Customer findFirstById(Integer id);

    Customer findByEmail(String email);
    public void insert(Customer customer);

    public void delete(Customer customer);

    public void deleteById(Integer id);
}
