import React from "react";
import "./App.css";
import OrderDetails from "./Customer/Components/Order/OrderDetails.jsx";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "../src/Routers/CustomerRouters.jsx";

function App() {
  return (
    <div className="div">
      <Routes>
        <Route path="/*" element={<CustomerRouters />} />
      </Routes>
    </div>
  );
}

export default App;
