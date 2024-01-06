package com.example.ProiectIs.DTO;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class PcCustomer {

    private Integer pcId;
    private Integer customerId;
    private Integer price;
}
