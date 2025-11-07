package com.shree.backend.service.serviceImpl;

import com.shree.backend.entity.Cart;
import com.shree.backend.entity.User;
import com.shree.backend.exception.ProductException;
import com.shree.backend.repository.CartRepository;
import com.shree.backend.request.AddItemRequest;
import com.shree.backend.service.CartService;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService {

    private CartRepository cartRepository;
    private CartItemService cartItemService;

    @Override
    public Cart createCart(User user) {
        return null;
    }

    @Override
    public String addCartItem(Long userId, AddItemRequest req) throws ProductException {
        return "";
    }

    @Override
    public Cart findUserCart(Long userId) {
        return null;
    }
}
