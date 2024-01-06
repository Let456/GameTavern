package com.example.ProiectIs.Controller;

import com.example.ProiectIs.DTO.ConsoleCustomer;
import com.example.ProiectIs.DTO.CustomerConsole;
import com.example.ProiectIs.DTO.PcCustomer;
import com.example.ProiectIs.Model.Console;
import com.example.ProiectIs.Model.Customer;
import com.example.ProiectIs.Model.Pc;
import com.example.ProiectIs.Service.Implementation.ConsoleServiceImplementation;
import com.example.ProiectIs.Service.Implementation.PcServiceImplementation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
        if(console != null)
            return ResponseEntity.status(HttpStatus.OK).body(console);
        else
            return ResponseEntity.badRequest().body("Invalid");
    }

    @PostMapping("/Insert")
    public ResponseEntity<String> insert(@RequestBody Console console)
    {
        String string = consoleServiceImplementation.insert(console);
        if(string.equals("Console Inserted"))
        {
            return ResponseEntity.ok(string);
        }
        else
        {
            return ResponseEntity.badRequest().body(string);
        }
    }

    @GetMapping("/FindAll")
    public ResponseEntity<List<Console>> findAll()
    {
        List<Console> consoleList = consoleServiceImplementation.findAll();

        return ResponseEntity.ok(consoleList);
    }

    @PostMapping("/UpdateConsoleList")
    public void updateConsoleList(@RequestBody ConsoleCustomer consoleCustomer)
    {
        Integer consoleId = consoleCustomer.getConsoleId();
        Integer customerId = consoleCustomer.getCustomerId();
        consoleServiceImplementation.updateConsoleList(consoleId, customerId);
    }

    @PostMapping("/RentConsole")
    public ResponseEntity<String> rentConsole(@RequestBody CustomerConsole customerConsole)
    {
        Integer consoleId = customerConsole.getConsoleId();
        Integer customerId = customerConsole.getCustomerId();
        Integer price = customerConsole.getPrice();
        String string = consoleServiceImplementation.rentConsole(consoleId, customerId, price);
        if(string.equals("Console Rented Successfully"))
            return ResponseEntity.ok(string);
        else
            return ResponseEntity.badRequest().body(string);
    }

    @PostMapping("/Rent")
    public ResponseEntity<Integer> rentPrice(@RequestParam String hoursToRent, @RequestParam Integer consoleId)
    {
        System.out.println(hoursToRent);
        System.out.println(consoleId);
        Integer resultedPrice = consoleServiceImplementation.rentPrice(Integer.valueOf(hoursToRent),consoleId);
        return ResponseEntity.ok().body(resultedPrice);
    }

    @PostMapping("/DeleteById")
    public ResponseEntity<String> deletePcById(@RequestBody Integer id)
    {
        System.out.println(id);
        consoleServiceImplementation.deleteById(id);

        return  ResponseEntity.ok().body("Console Deleted Succesfully");
    }
}
