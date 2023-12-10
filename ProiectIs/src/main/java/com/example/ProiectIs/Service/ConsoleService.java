package com.example.ProiectIs.Service;

import com.example.ProiectIs.Model.Console;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface ConsoleService {

    Console findFirstById(Integer id);

    List<Console> findAllByConsoleType(Integer type);

    public void insert(Console console);

    public void delete(Console console);

    public void deleteById(Integer id);
}
