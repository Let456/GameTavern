package com.example.ProiectIs.Controller;


import com.example.ProiectIs.DTO.ConsoleCustomer;
import com.example.ProiectIs.DTO.CustomerPc;
import com.example.ProiectIs.DTO.PcCustomer;
import com.example.ProiectIs.Model.Console;
import com.example.ProiectIs.Model.Customer;
import com.example.ProiectIs.Model.Pc;
import com.example.ProiectIs.Service.Implementation.PcServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin
@RequestMapping("/Pc")
public class PcController {

    private final PcServiceImplementation pcServiceImplementation;

    @PostMapping("/GetById")
    public ResponseEntity getById(@RequestBody Integer id)
    {
        Pc pc = pcServiceImplementation.findFirstById(id);
        if(pc != null)
            return ResponseEntity.status(HttpStatus.OK).body(pc);
        else
            return ResponseEntity.badRequest().body("Invalid");
    }

    @PostMapping("/Insert")
    public ResponseEntity<String> insert(@RequestBody Pc pc)
    {
        String string = pcServiceImplementation.insert(pc);
        if(string.equals("Pc Inserted"))
        {
            return ResponseEntity.ok(string);
        }
        else
        {
            return ResponseEntity.badRequest().body(string);
        }
    }

    @GetMapping("/FindAll")
    public ResponseEntity<List<Pc>> findAll()
    {
        List<Pc> pcList = pcServiceImplementation.findAll();

        return ResponseEntity.ok(pcList);
    }

    @PostMapping("/RentPc")
    public ResponseEntity<String> rentPc(@RequestBody PcCustomer pcCustomer)
    {
        Integer pcId = pcCustomer.getPcId();
        Integer customerId = pcCustomer.getCustomerId();
        Integer price = pcCustomer.getPrice();
        String string = pcServiceImplementation.rentPc(pcId, customerId, price);
        if(string.equals("Pc Rented Successfully"))
            return ResponseEntity.ok(string);
        else
            return ResponseEntity.badRequest().body(string);
    }

    @PostMapping("/UpdatePcList")
    public void updateConsoleList(@RequestBody CustomerPc consoleCustomer)
    {
        Integer pcId = consoleCustomer.getPcId();
        Integer customerId = consoleCustomer.getCustomerId();
        pcServiceImplementation.updatePcList(pcId, customerId);
    }

    @PostMapping("/Rent")
    public ResponseEntity<Integer> rentPrice(@RequestParam String hoursToRent, @RequestParam Integer pcId)
    {
        System.out.println(hoursToRent);
        System.out.println(pcId);
        Integer resultedPrice = pcServiceImplementation.rentPrice(Integer.valueOf(hoursToRent),pcId);
        return ResponseEntity.ok().body(resultedPrice);
    }

    @PostMapping("DeleteById")
    public ResponseEntity<String> deletePcById(@RequestBody Integer id)
    {
        System.out.println(id);
        pcServiceImplementation.deleteById(id);

        return  ResponseEntity.ok().body("Pc Deleted Succesfully");
    }

}
