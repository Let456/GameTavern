package com.example.ProiectIs.Repository;

import com.example.ProiectIs.Model.BarOrder;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BarOrderRepository extends CrudRepository<BarOrder, Integer> {

    BarOrder findFirstById(Integer id);

}
