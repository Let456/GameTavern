package com.example.ProiectIs.Repository;


import com.example.ProiectIs.Model.Pc;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PcRepository extends CrudRepository<Pc, Integer> {

    Pc findFirstById(Integer id);
    List<Pc> findAllByPcType(Integer type);

    List<Pc> findAll();
    void deleteById(Integer id);
}
