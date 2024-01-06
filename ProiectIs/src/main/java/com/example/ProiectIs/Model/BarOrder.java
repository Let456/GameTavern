package com.example.ProiectIs.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data

public class BarOrder {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    private Integer price;
    private Integer itemsOrdered;
    @ManyToOne
    @JoinColumn(name="orderItem", referencedColumnName = "id")
    private BarItem barItem;
    public BarOrder(Integer price, int itemsOrdered, BarItem barItem) {
        this.price = price;
        this.itemsOrdered = itemsOrdered;
        this.barItem = barItem;
    }
}
