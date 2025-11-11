package com.shree.backend.controller;

import com.shree.backend.entity.Order;
import com.shree.backend.exception.OrderException;
import com.shree.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/orders")
public class AdminOrderController {

    private OrderService orderService;

    public AdminOrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Order>> getAllOrdersHandle() {
        List<Order> orders = orderService.getAllOrders();
        return new ResponseEntity<List<Order>>(orders, HttpStatus.OK);
    }

    @PutMapping("/{orderId}/confirmed")
    public ResponseEntity<Order> confirmOrderHandler(@PathVariable Long orderId,@RequestHeader("Authorization")String jwt ) throws OrderException {
        Order order = orderService.confirmedOrder(orderId);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    @PutMapping("/{orderId}/ship")
    public ResponseEntity<Order> shippedOrderHandler(@PathVariable Long orderId,@RequestHeader ("Authorization")String jwt) throws OrderException {
        Order order = orderService.shippedOrder(orderId);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    @PutMapping("/{orderId}/deliver")
    public ResponseEntity<Order> DeliveredOrderHandler(@PathVariable Long orderId,@RequestHeader("Authorization")String jwt) throws OrderException {
        Order order = orderService.deliveredOrder(orderId);
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    @PutMapping("/{orderId}/cancel")
    public ResponseEntity<Order> CancelOrderHandler(@PathVariable Long orderId,@RequestHeader("Authorization")String jwt) throws OrderException {
        Order Order= orderService.calcledOrder(orderId);
        return new ResponseEntity<>(Order, HttpStatus.OK);
    }

//    @DeleteMapping("{orderId}/delete")
//    public ResponseEntity<ApiResponse> deleteOrder(@PathVariable Long orderId) throws OrderException {
//        orderService.deleteOrder(orderId);
//
//        ApiResponse res = new ApiResponse();
//        res.setMessage("Order deleted Successfully");
//        res.setStatus(true);
//
//        return new ResponseEntity<>(res, HttpStatus.OK);
//    }

}
