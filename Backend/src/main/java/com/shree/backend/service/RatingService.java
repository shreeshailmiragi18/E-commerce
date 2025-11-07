package com.shree.backend.service;

import com.shree.backend.entity.Rating;
import com.shree.backend.entity.User;
import com.shree.backend.exception.ProductException;
import com.shree.backend.request.RatingRequest;

import java.util.List;

public interface RatingService {
    public Rating createRating(RatingRequest req, User user) throws ProductException;
    public List<Rating> getProductRating(Long productId);
}
