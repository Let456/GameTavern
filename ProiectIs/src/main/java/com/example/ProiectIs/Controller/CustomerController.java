package com.example.ProiectIs.Controller;

import com.example.ProiectIs.DTO.ObiectNou;
import com.example.ProiectIs.Model.Customer;
import com.example.ProiectIs.Service.Implementation.CustomerServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin
@RequestMapping("/Customer")
public class CustomerController {

    private final CustomerServiceImplementation customerServiceImplementation;

    @GetMapping("/GetData")
    public String getMessage()
    {
        return "Eduard are mere";
    }

    @PostMapping("/Login")
    public ResponseEntity<Object> login(@RequestBody Customer credentials) {

        Customer customer = customerServiceImplementation.findByEmail(credentials.getEmail());

        if (customer == null) {
            return ResponseEntity.badRequest().body("Invalid credentials");
        }

        if (!customer.getPassword().equals(credentials.getPassword())) {
            return ResponseEntity.badRequest().body("Invalid credentials");
        }

        return ResponseEntity.ok(customer);
    }

//    @PostMapping("GetCustomerByEmail")
//    public Customer getCustomerByEmail(@RequestBody Customer credentials)
//    {
//
//    }




    @PostMapping("/GetById")
    public ResponseEntity getById(@RequestBody Integer id)
    {
        Customer customer = customerServiceImplementation.findFirstById(id);
        return ResponseEntity.status(HttpStatus.OK).body(customer);
    }
    @PostMapping("/Print")
    public void printMessage(@RequestBody ObiectNou data)
    {
        System.out.println(data);
    }

    @PostMapping("/Insert")
    public ResponseEntity<String> insert(@RequestBody Customer customer)
    {
        if(customer.getEmail().isEmpty() || customer.getCustomerName().isEmpty()
                || customer.getAge() == null || customer.getPassword().isEmpty())
        {
            return ResponseEntity.badRequest().body("All fields are required");
        }
        else if(!(customer.getEmail().matches("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")))
        {
            return ResponseEntity.badRequest().body("Invalid email address");
        }
        else
        {
            customerServiceImplementation.insert(customer);
            System.out.println(customer);
            return ResponseEntity.ok("Account Created");
        }
    }
}
