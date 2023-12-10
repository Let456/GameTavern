package com.example.ProiectIs.Repository;

import com.example.ProiectIs.Model.Console;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConsoleRepository extends CrudRepository<Console, Integer> {

    Console findFirstById(Integer id);
    List<Console> findAllByConsoleType(Integer type);
}
