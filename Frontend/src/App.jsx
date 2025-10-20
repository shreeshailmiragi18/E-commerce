import React from "react";
import "./App.css";
import Navigation from "../src/Customer/Components/Navigation/Navigation.jsx";
import ProductDetails from "../src/Customer/Components/ProductDetails/ProductDetails.jsx";
import HomePage from "../src/Customer/Pages/HomePage/HomePage";
import Footer from "../src/Customer/Components/Footer/Footer";
import Product from "./Customer/Components/Product/Product";
import Cart from "./Customer/Components/Cart/Cart.jsx";
import Checkout from "./Customer/Components/Checkout/Checkout.jsx";
import Order from "./Customer/Components/Order/Order.jsx";
import OrderDetails from "./Customer/Components/Order/OrderDetails.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="div">
      <Routes>
        <Route path="/" element={<CustomerRouters />} />
      </Routes>
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/*<Product/> */}
        {/* <ProductDetails /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <Order /> */}
        <OrderDetails />
      </div>
      <Footer />
    </div>
  );
}

export default App;
