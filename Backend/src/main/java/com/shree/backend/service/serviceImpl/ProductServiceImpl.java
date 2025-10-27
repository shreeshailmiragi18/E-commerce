package com.shree.backend.service.serviceImpl;

import com.shree.backend.entity.Product;
import com.shree.backend.exception.ProductException;
import com.shree.backend.repository.CategoryRepository;
import com.shree.backend.repository.ProductRepository;
import com.shree.backend.request.CreateProductRequest;
import com.shree.backend.service.ProductService;
import com.shree.backend.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    private ProductRepository productRepository;
    private CategoryRepository categoryRepository;
    private UserService userService;

    public ProductServiceImpl(ProductRepository productRepository,UserService userService, CategoryRepository categoryRepository) {
           this.productRepository = productRepository;
           this.categoryRepository = categoryRepository;
           this.userService = userService;
    }

    @Override
    public Product createProduct(CreateProductRequest req) {
        return null;
    }

    @Override
    public String deleteProduct(Long productId) throws ProductException {
        return "";
    }

    @Override
    public Product updateProduct(Long productId, Product product) throws ProductException {
        return null;
    }

    @Override
    public Product findProductById(Long id) throws ProductException {
        return null;
    }

    @Override
    public List<Product> findProductByCategory(String category) {
        return List.of();
    }

    @Override
    public Page<Product> getAllProduct(String category, List<String> colors, List<String> sizes, Integer minPrice, Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize) {
        return null;
    }
}
