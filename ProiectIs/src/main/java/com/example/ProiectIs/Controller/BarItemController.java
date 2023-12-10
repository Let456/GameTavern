package com.example.ProiectIs.Controller;


import com.example.ProiectIs.Model.BarItem;
import com.example.ProiectIs.Model.Console;
import com.example.ProiectIs.Service.Implementation.BarItemServiceImplementation;
import com.example.ProiectIs.Service.Implementation.ConsoleServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/Insert")
    public void insert(@RequestBody BarItem item)
    {
        barItemServiceImplementation.insert(item);
        System.out.println(item);
    }

}
