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

        Customer customer = customerServiceImplementation.login(credentials);

        if (customer == null) {
           return ResponseEntity.badRequest().body("Invalid Credentials");
        }
        else {
            return ResponseEntity.ok(customer);
        }
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
        String string = customerServiceImplementation.insert(customer);
        if(string.equals("Account Created"))
        {
            return ResponseEntity.ok(string);
        }
        else
        {
            return ResponseEntity.badRequest().body(string);
        }
    }
}
