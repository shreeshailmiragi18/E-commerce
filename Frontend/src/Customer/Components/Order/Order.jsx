import React from "react";
import { Grid } from "@mui/material";
import OrderCart from "./OrderCart";

const Order = () => {
  const orderStatus = [
    { label: "On The Way", value: "on_the_way" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", value: "returned" },
  ];
  return (
    <div className="px-5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-between", marginTop: 5 }}>
        <Grid size={{ xs: 2.5 }}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5 border border-gray-200">
            <h5 className="font-bold text-lg">FILTERS</h5>
            <div className="space-y-4 mt-10">
              <h5 className="font-semibold">ORDER STATUS</h5>
              {orderStatus.map((option) => (
                <div className="flex items-center">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border border-gray-200 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={option.value}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid size={{ xs: 9 }}>
          <div className="space-y-5 mb-10">
            {[1, 1, 1, 1, 1, 1].map((item) => (
              <OrderCart key={item} />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
