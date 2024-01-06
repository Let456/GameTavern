package com.example.ProiectIs.Repository;

import com.example.ProiectIs.Model.BarItem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BarItemRepository extends CrudRepository<BarItem, Integer> {
    BarItem findFirstById(Integer id);
    List<BarItem> findAll();

    void deleteById(Integer id);

    void delete(BarItem barItem);
}
