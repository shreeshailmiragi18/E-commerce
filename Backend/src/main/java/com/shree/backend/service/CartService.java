package com.shree.backend.service;

import com.shree.backend.entity.Cart;
import com.shree.backend.entity.User;
import com.shree.backend.exception.ProductException;
import com.shree.backend.request.AddItemRequest;

public interface CartService {

    public Cart createCart(User user);

    public String addCartItem(Long userId, AddItemRequest req) throws ProductException;

    public Cart findUserCart(Long userId);
}
