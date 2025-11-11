package com.shree.backend.service.serviceImpl;

import com.shree.backend.entity.Product;
import com.shree.backend.entity.Review;
import com.shree.backend.entity.User;
import com.shree.backend.exception.ProductException;
import com.shree.backend.repository.ProductRepository;
import com.shree.backend.repository.ReviewRepository;
import com.shree.backend.request.ReviewRequest;
import com.shree.backend.service.ProductService;
import com.shree.backend.service.ReviewService;
import org.springframework.cglib.core.Local;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {

    private ReviewRepository reviewRepository;
    private ProductService productService;
    private ProductRepository productRepository;

    public ReviewServiceImpl(ReviewRepository reviewRepository, ProductService productService, ProductRepository productRepository) {
        this.reviewRepository = reviewRepository;
        this.productService = productService;
        this.productRepository = productRepository;
    }

    @Override
    public Review createReview(ReviewRequest req, User user) throws ProductException {
        Product product = productService.findProductById(req.getProductId());

        Review review = new Review();
        review.setProduct(product);
        review.setReview(req.getReview());
        review.setUser(user);
        review.setCreatedAt(LocalDateTime.now());

        return  reviewRepository.save(review);
    }

    @Override
    public List<Review> getAllReview(Long productId) {
        return reviewRepository.getAllByProductsReview(productId);
    }
}
