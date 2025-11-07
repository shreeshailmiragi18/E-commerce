package com.shree.backend.service.serviceImpl;

import com.shree.backend.entity.Product;
import com.shree.backend.entity.Rating;
import com.shree.backend.entity.User;
import com.shree.backend.exception.ProductException;
import com.shree.backend.repository.RatingRepository;
import com.shree.backend.request.RatingRequest;
import com.shree.backend.service.ProductService;
import com.shree.backend.service.RatingService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class RatingServiceImpl implements RatingService {

    private RatingRepository ratingRepository;
    private ProductService productService;

    public RatingServiceImpl(RatingRepository ratingRepository, ProductService productService) {
        this.ratingRepository = ratingRepository;
        this.productService = productService;
    }

    @Override
    public Rating createRating(RatingRequest req, User user) throws ProductException {
        Product product = productService.findProductById(req.getProductId());

        Rating rating = new Rating();
        rating.setProduct(product);
        rating.setUser(user);
        rating.setRating(req.getRating());
        rating.setCreatedAt(LocalDateTime.now());
        return ratingRepository.save(rating);


    }

    @Override
    public List<Rating> getProductRating(Long productId) {
        return ratingRepository.getAllByProductRating(productId);
    }
}
