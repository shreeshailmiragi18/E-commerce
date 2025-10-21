import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Customer/Pages/HomePage/HomePage";
import Cart from "../Customer/Components/Cart/Cart";
import Navigation from "../Customer/Components/Navigation/Navigation";
import Checkout from "../Customer/Components/Checkout/Checkout";
import Footer from "../Customer/Components/Footer/Footer";
import Order from "../Customer/Components/Order/Order";
import Product from "../Customer/Components/Product/Product";
import ProductDetails from "../Customer/Components/ProductDetails/ProductDetails";
import OrderDetails from "../Customer/Components/Order/OrderDetails";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
