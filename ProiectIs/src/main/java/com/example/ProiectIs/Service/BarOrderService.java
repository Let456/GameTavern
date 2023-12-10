package com.example.ProiectIs.Service;

import com.example.ProiectIs.Model.BarOrder;
import org.springframework.stereotype.Component;

@Component
public interface BarOrderService {
    BarOrder findFirstById(Integer id);
    public void insert(BarOrder order);

    public void delete(BarOrder order);

    public void deleteById(Integer id);
}
