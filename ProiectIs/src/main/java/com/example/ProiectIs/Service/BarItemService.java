package com.example.ProiectIs.Service;

import com.example.ProiectIs.Model.BarItem;
import org.springframework.stereotype.Component;

@Component
public interface BarItemService {
    BarItem findFirstById(Integer id);

    public void insert(BarItem barItem);

    public void delete(BarItem barItem);

    public void deleteById(Integer id);
}
