package com.example.ProiectIs.Service.Implementation;

import com.example.ProiectIs.Model.Customer;
import com.example.ProiectIs.Repository.CustomerRepository;
import com.example.ProiectIs.Service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomerServiceImplementation implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;
    @Override
    public Customer findFirstById(Integer id) {
        return customerRepository.findFirstById(id);
    }

    @Override
    public Customer findByEmail(String email) {
        return customerRepository.findFirstByEmail(email);
    }

    @Override
    public void insert(Customer customer) {
        customerRepository.save(customer);
    }

    @Override
    public void delete(Customer customer) {
        customerRepository.delete(customer);
    }

    @Override
    public void deleteById(Integer id) {
        customerRepository.deleteById(id);
    }
}
