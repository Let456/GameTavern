package com.example.ProiectIs.Service;

import com.example.ProiectIs.Model.Console;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface ConsoleService {

    Console findFirstById(Integer id);

    List<Console> findAll();
    List<Console> findAllByConsoleType(Integer type);

    public void updateConsoleList(Integer consoleId, Integer customerId);
    public String rentConsole(Integer consoleId, Integer customerId, Integer price);

    public String insert(Console console);

    public void delete(Console console);

    public void deleteById(Integer id);

    public Integer rentPrice(Integer hoursToRent, Integer consoleId);
}
