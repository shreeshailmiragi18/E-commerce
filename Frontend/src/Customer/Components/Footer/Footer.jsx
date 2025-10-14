import React from "react";
import { Grid, Typography, Button } from "@mui/material";


const Footer = () => {
  return (
    <div>
      <Grid className=" bg-black text-white">
        <Grid
          className="bg-black text-white text-center mt-10"
          container
          spacing={2}
          justifyContent={"space-evenly"}
          sx={{ bgColor: "black", color: "white", py: 3 }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" color="#646cffaa" variant="h6">
              Company
            </Typography>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                About Us
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                Contact us
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                Blogs
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                Jobs
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                Partners
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" color="#646cffaa" variant="h6">
              Solutions
            </Typography>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                Marketing
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                Analytics
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                Commerce
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                Insights
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                Support
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" color="#646cffaa" variant="h6">
              Help
            </Typography>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                Payments
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                Shipping
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                Cancellation & Returns
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                FAQs
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" color="#646cffaa" variant="h6">
              Legal
            </Typography>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom >
                Privacy Policy
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                Terms of Service
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                Security
              </Button>
            </div>
          </Grid>
        </Grid>
        <Grid className="pt-10 pb-5 " item xs={12}>
          <Typography variant="body2" color="p" align="center">
            © 2025 My Company. All rights reserved.
          </Typography>
          <Typography variant="body2" color="p" align="center">
            Made with love by me.
          </Typography>
         
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
