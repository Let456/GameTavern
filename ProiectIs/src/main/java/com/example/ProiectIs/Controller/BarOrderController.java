package com.example.ProiectIs.Controller;

import com.example.ProiectIs.Model.BarOrder;
import com.example.ProiectIs.Model.Console;
import com.example.ProiectIs.Service.Implementation.BarOrderServiceImplementation;
import com.example.ProiectIs.Service.Implementation.ConsoleServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin
@RequestMapping("/BarOrder")

public class BarOrderController {

    private final BarOrderServiceImplementation barOrderServiceImplementation;

    @PostMapping("/GetById")
    public ResponseEntity getById(@RequestBody Integer id)
    {
        BarOrder order = barOrderServiceImplementation.findFirstById(id);
        return ResponseEntity.status(HttpStatus.OK).body(order);
    }

    @PostMapping("/Insert")
    public void insert(@RequestBody BarOrder order)
    {
        barOrderServiceImplementation.insert(order);
        System.out.println(order);
    }

}
