import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={7}>
        <Grid item xs={7}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, backgroundColor: "#9155fd" }}
            >
              JD
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className=" font-semibold text-lg">John Doe</p>
              <p className="text-gray-500 opacity-70">October 5, 2025</p>
            </div>
          </div>

          <Rating name="half-rating" value={4.5} readOnly precision={.5} />
          <p className="text-gray-700 mt-2">
            Great product! Really satisfied with the quality and performance.
           
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
