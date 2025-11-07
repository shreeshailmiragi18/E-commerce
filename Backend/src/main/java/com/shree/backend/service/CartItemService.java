package com.shree.backend.service;

import com.shree.backend.entity.Cart;
import com.shree.backend.entity.CartItem;
import com.shree.backend.entity.Product;
import com.shree.backend.exception.CartItemException;
import com.shree.backend.exception.UserException;

public interface CartItemService {
    public CartItem createCartItem(CartItem cartItem);

    public CartItem updateCartItem(Long userId,Long id,CartItem cartItem)throws CartItemException, UserException;

    public CartItem isCartItemExist(Cart cart, Product product, String size,Long userId);

    public void removeCartItem(Long userId,Long cartItemId) throws CartItemException,UserException;

    public CartItem findCartItemById(Long cartItemId) throws CartItemException;
}
