package com.example.ProiectIs.Service.Implementation;

import com.example.ProiectIs.Model.Console;
import com.example.ProiectIs.Model.Customer;
import com.example.ProiectIs.Model.Pc;
import com.example.ProiectIs.Repository.PcRepository;
import com.example.ProiectIs.Service.PcService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PcServiceImplementation implements PcService {

    @Autowired
    private PcRepository pcRepository;

    @Autowired
    private CustomerServiceImplementation customerServiceImplementation;


    @Override
    public Pc findFirstById(Integer id) {
        return pcRepository.findFirstById(id);
    }

    @Override
    public List<Pc> findAll() {
        return pcRepository.findAll();
    }

    @Override
    public List<Pc> findAllByPcType(Integer type) {
        return pcRepository.findAllByPcType(type);
    }

    @Override
    public void updatePcList(Integer pcId, Integer customerId) {
        Pc pc = findFirstById(pcId);
        Customer customer = customerServiceImplementation.findFirstById(customerId);
        List<Pc> pcList = customer.getPcList();
        pcList.remove(pc);
        customer.setPcList(pcList);
        customerServiceImplementation.update(customer);
    }

    @Override
    public String rentPc(Integer pcId, Integer customerId, Integer price) {
        Customer customer = customerServiceImplementation.findFirstById(customerId);
        Pc pc = findFirstById(pcId);

        if(customer.getWage() >= price)
        {
            if(customer.getPcList() != null)
            {
                List<Pc> pcList = customer.getPcList();
                pcList.add(pc);
                customer.setPcList(pcList);
                customer.setWage(customer.getWage() - price);
                customerServiceImplementation.update(customer);
                return("Pc Rented Successfully");
            }
            else
            {
                List<Pc> pcList = new ArrayList<>();
                pcList.add(pc);
                customer.setPcList(pcList);
                customer.setWage(customer.getWage() - price);
                customerServiceImplementation.update(customer);
                return("Pc Rented Successfully");
            }
        }
        else
            return ("Not enough money");
    }

    @Override
    public String insert(Pc pc) {

        if(pc.getPricePerHour() == null || pc.getPcType() == null)
            return ("All fields are required");
        else
        {
            pcRepository.save(pc);
            return ("Pc Inserted");
        }
    }

    @Override
    public void delete(Pc pc) {
        pcRepository.delete(pc);
    }

    @Override
    public void deleteById(Integer id) {
        pcRepository.deleteById(id);
    }

    @Override
    public Integer rentPrice(Integer hoursToRent, Integer pcId) {
        Pc pc = findFirstById(pcId);
        return pc.getPricePerHour() * hoursToRent;
    }
}
