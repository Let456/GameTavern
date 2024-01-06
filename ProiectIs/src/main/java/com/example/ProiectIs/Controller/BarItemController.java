package com.example.ProiectIs.Controller;


import com.example.ProiectIs.DTO.CustomerItem;
import com.example.ProiectIs.Model.BarItem;
import com.example.ProiectIs.Model.Console;
import com.example.ProiectIs.Model.Customer;
import com.example.ProiectIs.Model.Pc;
import com.example.ProiectIs.Service.Implementation.BarItemServiceImplementation;
import com.example.ProiectIs.Service.Implementation.ConsoleServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin
@RequestMapping("/BarItem")

public class BarItemController {

    private final BarItemServiceImplementation barItemServiceImplementation;

    @PostMapping("/GetById")
    public ResponseEntity getById(@RequestBody Integer id)
    {
        BarItem item = barItemServiceImplementation.findFirstById(id);
        return ResponseEntity.status(HttpStatus.OK).body(item);
    }

    @GetMapping("/FindAll")
    public ResponseEntity<List<BarItem>> findAll()
    {
        List<BarItem> barItemList = barItemServiceImplementation.findAll();

        return ResponseEntity.ok(barItemList);
    }

    @PostMapping("/Insert")
    public ResponseEntity<String> insert(@RequestBody BarItem barItem)
    {
        String string = barItemServiceImplementation.insert(barItem);
        if(string.equals("barItem Inserted"))
        {
            return ResponseEntity.ok(string);
        }
        else
        {
            return ResponseEntity.badRequest().body(string);
        }
    }

    @PostMapping("Update")
    public void updateCustomer(@RequestBody BarItem barItem)
    {
        barItemServiceImplementation.update(barItem);
    }

    @PostMapping("/DeleteById")
    public ResponseEntity<String> delete(@RequestBody Integer id)
    {
        System.out.println(id);
        barItemServiceImplementation.deleteById(id);

        return  ResponseEntity.ok().body("BarItem Deleted Succesfully");
    }

    @PostMapping("/Delete")
    public void deleteCustomer(@RequestBody BarItem barItem)
    {
        barItemServiceImplementation.delete(barItem);
    }

    @PostMapping("/Buy")
    public ResponseEntity<String> buy(@RequestBody CustomerItem customerItem)
    {
        Customer customer = customerItem.getCustomer();
        BarItem barItem = customerItem.getBarItem();
        System.out.println(customer);
        System.out.println(barItem);
        String string = barItemServiceImplementation.buy(customer, barItem);
        if(string.equals("Item bought successfully"))
            return ResponseEntity.ok(string);
        else
            return ResponseEntity.badRequest().body(string);
    }

}
