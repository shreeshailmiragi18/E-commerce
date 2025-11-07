package com.shree.backend.service;

import com.shree.backend.entity.Review;
import com.shree.backend.entity.User;
import com.shree.backend.exception.ProductException;
import com.shree.backend.request.ReviewRequest;

import java.util.List;

public interface ReviewService {

    public Review createReview(ReviewRequest req, User user) throws ProductException;
    public List<Review> getAllReview(Long productId);

}
