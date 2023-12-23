package com.example.ProiectIs.Service.Implementation;

import com.example.ProiectIs.Model.Customer;
import com.example.ProiectIs.Repository.CustomerRepository;
import com.example.ProiectIs.Service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public String insert(Customer customer) {

        if(customer.getEmail().isEmpty() || customer.getCustomerName().isEmpty()
                || customer.getAge() == null || customer.getPassword().isEmpty())
        {
            return ("All fields are required");
        }
        else if(!(customer.getEmail().matches("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")))
        {
            return ("Invalid email address");
        }
        else
        {
            customerRepository.save(customer);
            System.out.println(customer);
            return ("Account Created");
        }

    }

    @Override
    public void delete(Customer customer) {
        customerRepository.delete(customer);
    }

    @Override
    public Customer login(Customer credentials) {
        Customer customer = findByEmail(credentials.getEmail());

        if (customer == null || !(customer.getPassword().equals(credentials.getPassword()))) {
            return null;
        }
        {
            return customer;
        }
    }

    @Override
    public void deleteById(Integer id) {
        customerRepository.deleteById(id);
    }
}
