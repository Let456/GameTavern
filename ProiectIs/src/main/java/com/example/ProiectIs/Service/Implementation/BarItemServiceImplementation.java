package com.example.ProiectIs.Service.Implementation;

import com.example.ProiectIs.Model.BarItem;
import com.example.ProiectIs.Model.BarOrder;
import com.example.ProiectIs.Model.Customer;
import com.example.ProiectIs.Repository.BarItemRepository;
import com.example.ProiectIs.Repository.CustomerRepository;
import com.example.ProiectIs.Service.BarItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class BarItemServiceImplementation implements BarItemService {

    @Autowired
    private BarItemRepository barItemRepository;

    private final CustomerServiceImplementation customerServiceImplementation;

    private final BarOrderServiceImplementation barOrderServiceImplementation;

    @Override
    public BarItem findFirstById(Integer id) {
        return barItemRepository.findFirstById(id);
    }

    public List<BarItem> findAll() {
        return barItemRepository.findAll();
    }

    @Override
    public String insert(BarItem barItem) {
        if(barItem.getPrice() == null || barItem.getName() == null || barItem.getDescription() == null)
            return ("All fields are required");
        else
        {
            barItemRepository.save(barItem);
            return ("barItem Inserted");
        }
    }

    @Override
    public void update(BarItem barItem) {
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

    @Override
    public String buy(Customer customer, BarItem barItem) {
        if(barItem.getStock() >= 1)
        {
            if(customer.getWage() > barItem.getPrice())
            {
                customer.setWage(customer.getWage() - barItem.getPrice());
                barItem.setStock(barItem.getStock() - 1);
                BarOrder barOrder = new BarOrder(barItem.getPrice(), 1, barItem);
                if(customer.getBarOrderList() != null)
                {
                    List<BarOrder> barOrderList = customer.getBarOrderList();
                    barOrderList.add(barOrder);
                    customer.setBarOrderList(barOrderList);
                }
                else
                {
                    List<BarOrder> barOrderList = new ArrayList<>();
                    barOrderList.add(barOrder);
                    customer.setBarOrderList(barOrderList);
                }
                update(barItem);
                barOrderServiceImplementation.update(barOrder);
                customerServiceImplementation.update(customer);
                return ("Item bought successfully");
            }
            else
                return("Not enough money");
        }
        return("No more in stock");
    }
}
