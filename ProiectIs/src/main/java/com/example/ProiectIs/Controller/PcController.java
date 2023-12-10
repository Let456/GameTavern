package com.example.ProiectIs.Controller;


import com.example.ProiectIs.Model.Customer;
import com.example.ProiectIs.Model.Pc;
import com.example.ProiectIs.Service.Implementation.PcServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin
@RequestMapping("/Pc")
public class PcController {

    private final PcServiceImplementation pcServiceImplementation;

    @PostMapping("/GetById")
    public ResponseEntity getById(@RequestBody Integer id)
    {
        Pc pc = pcServiceImplementation.findFirstByID(id);
        return ResponseEntity.status(HttpStatus.OK).body(pc);
    }

    @PostMapping("/Insert")
    public void insert(@RequestBody Pc pc)
    {
        pcServiceImplementation.insert(pc);
        System.out.println(pc);
    }
}
