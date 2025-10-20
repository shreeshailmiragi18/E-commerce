import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{ alignItems: "flex-start" }}>
        <Grid item xs={1}>
          <Avatar
            className="text-white" 
            sx={{ width: 50, height: 50, backgroundColor: "#9155fd" }}
          >
            JD
          </Avatar>
        </Grid>

        <Grid item xs={11}>
          <div className="space-y-1">
            <div>
              <p className="font-semibold text-lg">John Doe</p>
              <p className="text-gray-500 opacity-70">October 5, 2025</p>
            </div>
            <Rating name="half-rating" value={4.5} readOnly precision={.5} />
            <div className="w-full">
               <p className="text-gray-700 w-[500px] whitespace-normal break-words">
              Great product! Really satisfied with the quality and performance.qertyjnfgey qwertyu
            </p>
              </div>
           
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
