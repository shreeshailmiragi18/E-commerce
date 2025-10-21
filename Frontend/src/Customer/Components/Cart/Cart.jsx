import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  return (
    <div className="mt-10">
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2 gap-2">
          {[1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-5">
          <div className="border border-gray-200 shadow-lg rounded-md p-5">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>&#8377;2341</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">&#8377;231</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Deliver Charge</span>
                <span className="text-green-600">&#8377;20</span>
              </div>
              <div className="flex justify-between pt-3 text-black font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">&#8377;2513</span>
              </div>
              <Button
                onClick={handleCheckout}
                className="secondary w-full"
                variant="contained"
                sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd", mt: "2rem" }}
              >
                CHECKOUT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
