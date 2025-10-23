package com.shree.backend.entity;


import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class RatingEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    @ManyToOne
    @JoinColumn(name="product_id", nullable = false)
    private ProductEntity product;

    @Column(name = "rating")
    private double rating;

    private LocalDateTime createdAt;

}
