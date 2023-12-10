package com.example.ProiectIs.Service.Implementation;

import com.example.ProiectIs.Model.BarItem;
import com.example.ProiectIs.Repository.BarItemRepository;
import com.example.ProiectIs.Service.BarItemService;
import org.springframework.stereotype.Service;

@Service
public class BarItemServiceImplementation implements BarItemService {

    private BarItemRepository barItemRepository;

    @Override
    public BarItem findFirstById(Integer id) {
        return barItemRepository.findFirstById(id);
    }

    @Override
    public void insert(BarItem barItem) {
        barItemRepository.save(barItem);
    }

    @Override
    public void delete(BarItem barItem) {
        barItemRepository.delete(barItem);
    }

    @Override
    public void deleteById(Integer id) {
        barItemRepository.deleteById(id);
    }
}
