package com.example.ProiectIs.Controller;

import com.example.ProiectIs.DTO.BarOrderCustomer;
import com.example.ProiectIs.DTO.ConsoleCustomer;
import com.example.ProiectIs.DTO.CustomerItem;
import com.example.ProiectIs.Model.Customer;
import com.example.ProiectIs.Service.Implementation.CustomerServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/FindAll")
    public ResponseEntity<List<Customer>> findAll()
    {
        List<Customer> customerList = customerServiceImplementation.findAll();

        return ResponseEntity.ok(customerList);
    }

    @PostMapping("/GetById")
    public ResponseEntity<Object> getById(@RequestBody Integer id)
    {
        Customer customer = customerServiceImplementation.findFirstById(id);
        if(customer != null)
            return ResponseEntity.status(HttpStatus.OK).body(customer);
        else
            return ResponseEntity.badRequest().body("Invalid");
    }
    @PostMapping("/Print")
    public void printMessage(@RequestBody CustomerItem data)
    {
        System.out.println(data);
    }

    @PostMapping("/DeleteById")
    public void deleteCustomerById(@RequestBody String id)
    {
        customerServiceImplementation.deleteById(Integer.valueOf(id));
    }

    @PostMapping("/Update")
    public void updateCustomer(@RequestBody Customer customer)
    {
        customerServiceImplementation.update(customer);
    }

    @PostMapping("/UpdateBarOrders")
    public void updateBarOrders(@RequestBody BarOrderCustomer barOrderCustomer)
    {
        Integer barOrderId = barOrderCustomer.getBarOrderId();
        Integer customerId = barOrderCustomer.getCustomerId();
        customerServiceImplementation.updateBarOrder(barOrderId, customerId);
    }

    @PostMapping("/Delete")
    public void deleteCustomer(@RequestBody Customer customer)
    {
        customerServiceImplementation.delete(customer);
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
