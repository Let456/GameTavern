package com.example.ProiectIs.Controller;

import com.example.ProiectIs.Model.Console;
import com.example.ProiectIs.Model.Pc;
import com.example.ProiectIs.Service.Implementation.ConsoleServiceImplementation;
import com.example.ProiectIs.Service.Implementation.PcServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin
@RequestMapping("/Console")
public class ConsoleController {

    private final ConsoleServiceImplementation consoleServiceImplementation;

    @PostMapping("/GetById")
    public ResponseEntity getById(@RequestBody Integer id)
    {
        Console console = consoleServiceImplementation.findFirstById(id);
        return ResponseEntity.status(HttpStatus.OK).body(console);
    }

    @PostMapping("/Insert")
    public void insert(@RequestBody Console console)
    {
        consoleServiceImplementation.insert(console);
        System.out.println(console);
    }
}
