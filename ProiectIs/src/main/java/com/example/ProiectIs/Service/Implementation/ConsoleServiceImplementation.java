package com.example.ProiectIs.Service.Implementation;

import com.example.ProiectIs.Model.Console;
import com.example.ProiectIs.Model.Customer;
import com.example.ProiectIs.Model.Pc;
import com.example.ProiectIs.Repository.ConsoleRepository;
import com.example.ProiectIs.Service.ConsoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ConsoleServiceImplementation implements ConsoleService {

    @Autowired
    private ConsoleRepository consoleRepository;

    @Autowired
    private CustomerServiceImplementation customerServiceImplementation;

    @Override
    public Console findFirstById(Integer id) {
        return consoleRepository.findFirstById(id);
    }

    @Override
    public List<Console> findAll() {
        return consoleRepository.findAll();
    }

    @Override
    public List<Console> findAllByConsoleType(Integer type) {
        return consoleRepository.findAllByConsoleType(type);
    }

    @Override
    public void updateConsoleList(Integer consoleId, Integer customerId) {
        Console console = findFirstById(consoleId);
        Customer customer = customerServiceImplementation.findFirstById(customerId);
        List<Console> consoleList = customer.getConsoleList();
        consoleList.remove(console);
        customer.setConsoleList(consoleList);
        customerServiceImplementation.update(customer);
    }

    @Override
    public String rentConsole(Integer consoleId, Integer customerId, Integer price) {
        Customer customer = customerServiceImplementation.findFirstById(customerId);
        Console console = findFirstById(consoleId);

        if(customer.getWage() >= price)
        {
            if(customer.getConsoleList() != null)
            {
                List<Console> consoleList = customer.getConsoleList();
                consoleList.add(console);
                customer.setConsoleList(consoleList);
                customer.setWage(customer.getWage() - price);
                customerServiceImplementation.update(customer);
                return("Console Rented Successfully");
            }
            else
            {
                List<Console> consoleList = new ArrayList<>();
                consoleList.add(console);
                customer.setConsoleList(consoleList);
                customer.setWage(customer.getWage() - price);
                customerServiceImplementation.update(customer);
                return("Console Rented Successfully");
            }
        }
        else
            return ("Not enough money");
    }

    @Override
    public String insert(Console console) {
        if(console.getPricePerHour() == null || console.getConsoleType() == null)
            return ("All fields are required");
        else
        {
            consoleRepository.save(console);
            return ("Console Inserted");
        }
    }

    @Override
    public void delete(Console console) {
        consoleRepository.delete(console);
    }

    @Override
    public void deleteById(Integer id) {
        consoleRepository.deleteById(id);
    }

    @Override
    public Integer rentPrice(Integer hoursToRent, Integer consoleId) {
        Console console = findFirstById(consoleId);
        return console.getPricePerHour() * hoursToRent;
    }
}
