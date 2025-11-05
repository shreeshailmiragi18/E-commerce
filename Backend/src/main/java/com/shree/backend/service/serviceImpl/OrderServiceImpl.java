package com.shree.backend.service.serviceImpl;

import com.shree.backend.entity.Address;
import com.shree.backend.entity.Order;
import com.shree.backend.entity.User;
import com.shree.backend.exception.OrderException;
import com.shree.backend.service.OrderService;
import com.shree.backend.service.ProductService;

import java.util.List;

public class OrderServiceImpl implements OrderService {

    private CartRepository cartRepository;
    private CartItemService cartItemService;
    private ProductService productService;
    public OrderServiceImpl(CartRepository cartRepository, CartItemService cartItemService, ProductService productService){
        this.cartRepository = cartRepository;
        this.cartItemService = cartItemService;
        this.productService = productService;
    }
    @Override
    public Order createOrder(User user, Address shippingAddress) {
        return null;
    }

    @Override
    public Order findOrderById(Long orderId) throws OrderException {
        return null;
    }

    @Override
    public List<Order> userOrderHistory(Long userId) {
        return List.of();
    }

    @Override
    public Order placedOrder(Long orderId) throws OrderException {
        return null;
    }

    @Override
    public Order confirmedOrder(Long orderId) throws OrderException {
        return null;
    }

    @Override
    public Order shippedOrder(Long orderId) throws OrderException {
        return null;
    }

    @Override
    public Order deliveredOrder(Long orderId) throws OrderException {
        return null;
    }

    @Override
    public Order calcledOrder(Long orderId) throws OrderException {
        return null;
    }

    @Override
    public List<Order> getAllOrders() {
        return List.of();
    }

    @Override
    public void deleteOrder(Long orderId) throws OrderException {

    }
}
