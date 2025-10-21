import React, { use } from "react";
import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCart = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/account/order/${5}`)}
      className="p-5 shadow-lg hover:shadow-2xl border border-gray-200"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid size={{ xs: 6 }}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p>Mens t-shirts</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid size={{ xs: 2 }}>
          <p>&#8377;999</p>
        </Grid>
        <Grid size={{ xs: 4 }}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered on Oct 10, 2025</span>
              </p>
              <p className="text-xs font-semibold text-green-600 mt-1">
                Your Item Has Been Delivered Successfully
              </p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery on Oct 10, 2025</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCart;
