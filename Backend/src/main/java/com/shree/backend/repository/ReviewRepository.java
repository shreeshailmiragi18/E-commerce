package com.shree.backend.repository;

import com.shree.backend.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    @Query("SELECT r From Review r Where r.product.id=:productId")
    public List<Review> getAllByProductsReview(@Param("productId")Long productId);
}
