package com.shree.backend.repository;

import com.shree.backend.entity.Cart;
import com.shree.backend.entity.CartItem;
import com.shree.backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;

public interface CartItemRepository extends JpaRepository<CartItem,Long> {

    @Query("SELECT ci From CartItem ci where ci.cart=:cart And ci.product=:priduct And ci.size=:size And ci.userId=:userId")
    public CartItem isCartItemExist(@Param("cart") Cart cart, @Param("Product") Product product, @Param( "size")String size, @Param("userId")Long userId);

}
