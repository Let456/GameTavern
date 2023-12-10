package com.example.ProiectIs.Service.Implementation;

import com.example.ProiectIs.Model.Pc;
import com.example.ProiectIs.Repository.PcRepository;
import com.example.ProiectIs.Service.PcService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PcServiceImplementation implements PcService {

    @Autowired
    private PcRepository pcRepository;


    @Override
    public Pc findFirstByID(Integer id) {
        return pcRepository.findFirstById(id);
    }

    @Override
    public List<Pc> findAllByPcType(Integer type) {
        return pcRepository.findAllByPcType(type);
    }

    @Override
    public void insert(Pc pc) {
        pcRepository.save(pc);
    }

    @Override
    public void delete(Pc pc) {
        pcRepository.delete(pc);
    }

    @Override
    public void deleteById(Integer id) {
        pcRepository.deleteById(id);
    }
}
