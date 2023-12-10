package com.example.ProiectIs;

import com.example.ProiectIs.Repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@RequiredArgsConstructor

public class ProiectIsApplication {

	private final CustomerRepository customerRepository;
	public static void main(String[] args) {
		SpringApplication.run(ProiectIsApplication.class, args);
	}

}
