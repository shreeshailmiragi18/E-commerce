package com.shree.backend.entity;

import jakarta.persistence.Column;
import org.springframework.stereotype.Component;

public class PaymentInformationEntity {

    @Column(name = "cardholder_name")
    private String cardholderName;

    @Column(name = "card_number")
    private String cardNumber;

    @Column(name = "expiration_date")
    private String expirationDate;

    @Column(name = "cvv")
    private String cvv;
}
