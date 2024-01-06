package com.example.ProiectIs.Service;

import com.example.ProiectIs.Model.Pc;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface PcService {

    Pc findFirstById(Integer id);

    List<Pc> findAll();
    List<Pc> findAllByPcType(Integer type);

    public void updatePcList(Integer pcId, Integer customerId);
    public String rentPc(Integer pcId, Integer customerId, Integer price);

    public String insert(Pc pc);

    public void delete(Pc pc);

    public void deleteById(Integer id);
    public Integer rentPrice(Integer hoursToRent, Integer pcId);

}

