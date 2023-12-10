package com.example.ProiectIs.Service.Implementation;

import com.example.ProiectIs.Model.Console;
import com.example.ProiectIs.Repository.ConsoleRepository;
import com.example.ProiectIs.Service.ConsoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConsoleServiceImplementation implements ConsoleService {

    @Autowired
    private ConsoleRepository consoleRepository;

    @Override
    public Console findFirstById(Integer id) {
        return consoleRepository.findFirstById(id);
    }

    @Override
    public List<Console> findAllByConsoleType(Integer type) {
        return consoleRepository.findAllByConsoleType(type);
    }

    @Override
    public void insert(Console console) {
        consoleRepository.save(console);
    }

    @Override
    public void delete(Console console) {
        consoleRepository.delete(console);
    }

    @Override
    public void deleteById(Integer id) {
        consoleRepository.deleteById(id);
    }
}
