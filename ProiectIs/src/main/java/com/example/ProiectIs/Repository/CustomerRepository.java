package com.example.ProiectIs.Repository;

import com.example.ProiectIs.Model.Customer;
import lombok.RequiredArgsConstructor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends CrudRepository<Customer,Integer> {
    Customer findFirstById(Integer id);

    Customer findFirstByEmail(String email);
    List<Customer> findAllByAge(Integer age);
}
