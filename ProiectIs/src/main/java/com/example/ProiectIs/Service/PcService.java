package com.example.ProiectIs.Service;

import com.example.ProiectIs.Model.Pc;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface PcService {

    Pc findFirstByID(Integer id);

    List<Pc> findAllByPcType(Integer type);

    public void insert(Pc pc);

    public void delete(Pc pc);

    public void deleteById(Integer id);

}

