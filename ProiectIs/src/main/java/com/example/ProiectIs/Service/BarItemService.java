package com.example.ProiectIs.Service;

import com.example.ProiectIs.Model.BarItem;
import com.example.ProiectIs.Model.Customer;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface BarItemService {
    BarItem findFirstById(Integer id);

    List<BarItem> findAll();

    public String insert(BarItem barItem);

    public void update(BarItem barItem);
    public void delete(BarItem barItem);

    public void deleteById(Integer id);

    public String buy(Customer customer, BarItem barItem);
}
