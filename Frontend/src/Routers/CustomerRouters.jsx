import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Customer/Pages/HomePage";
import Cart from "../Customer/Components/Cart/Cart";
import Navigation from "../Customer/Components/Navigation/Navigation";
import Footer from "../Customer/Components/Footer/Footer";
import Product from "../Customer/Components/Product/Product";
import ProductDetails from "../Customer/Components/ProductDetails/ProductDetails";

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
        <Route path="/product/:ProductId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
{
  /* <HomePage /> */
}
{
  /*<Product/> */
}
{
  /* <ProductDetails /> */
}
{
  /* <Cart /> */
}
{
  /* <Checkout /> */
}
{
  /* <Order /> */
}
<OrderDetails />;
