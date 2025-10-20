import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20 mt-5">
      <div className="border border-gray-200 shadow-md rounded-md p-5">
        <h5 className="font-bold text-xl py-7">Delivery Address</h5>
        <AddressCard />
      </div>
      <div className="py-10 border border-gray-200 shadow-md rounded-md  mt-5">
        <OrderTracker activeStep={3} />
      </div>

      {[1, 1, 1, 1].map((item) => (
        <div className="w-full shadow-md mt-5 border border-gray-200 rounded-md ">
          <Grid
            className="p-5"
            item
            container
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item size={{ xs: 6 }}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[7rem] h-[7rem] object-cover object-top"
                  src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">Mens Basic tees</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color: Black</span> <span>Size : M</span>
                  </p>
                  <p>Seller: Universaloutfit</p>
                  <p>&#8377;999</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default OrderDetails;
