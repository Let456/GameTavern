package com.example.ProiectIs.Service;

import com.example.ProiectIs.Model.Customer;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface CustomerService {
    Customer findFirstById(Integer id);

    Customer findByEmail(String email);

    List<Customer> findAll();
    public String insert(Customer customer);

    public void update(Customer customer);

    public void updateBarOrder(Integer id, Integer customerId);
    public void delete(Customer customer);

    public Customer login(Customer credentials);

    public void deleteById(Integer id);
}
