package com.example.ProiectIs.Service.Implementation;

import com.example.ProiectIs.Model.BarOrder;
import com.example.ProiectIs.Repository.BarOrderRepository;
import com.example.ProiectIs.Service.BarOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BarOrderServiceImplementation implements BarOrderService {

    @Autowired
    private BarOrderRepository barOrderRepository;

    @Override
    public BarOrder findFirstById(Integer id) {
        return barOrderRepository.findFirstById(id);
    }

    @Override
    public void insert(BarOrder order) {
        barOrderRepository.save(order);
    }

    @Override
    public void update(BarOrder barOrder) {
        barOrderRepository.save(barOrder);
    }

    @Override
    public void delete(BarOrder order) {
        barOrderRepository.delete(order);
    }

    @Override
    public void deleteById(Integer id) {
        barOrderRepository.deleteById(id);
    }
}
