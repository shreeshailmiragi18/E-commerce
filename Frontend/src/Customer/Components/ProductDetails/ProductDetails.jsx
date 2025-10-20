
import React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ProductReviewCard from "./ProductReviewCard";
import LinearProgress from "@mui/material/LinearProgress";

const product = {
  name: "Basic Tee Pack-6",
  price: "₹192",
  compareAtPrice: "₹299",
  discountedPrice: "35% off",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    {
      id: "white",
      name: "White",
      classes: "bg-white checked:outline-gray-400",
    },
    {
      id: "gray",
      name: "Gray",
      classes: "bg-gray-200 checked:outline-gray-400",
    },
    {
      id: "black",
      name: "Black",
      classes: "bg-gray-900 checked:outline-gray-900",
    },
  ],
  sizes: [
    { name: "XS", inStock: false },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 pt-10 gap-2 ">
          <div className="flex flex-col items-center">
            <img
              alt={product.images[0].alt}
              src={product.images[0].src}
              className="h-150 w-120 rounded-lg  object-cover max-lg:hidden"
            />
            <div className="flex flex-wrap space-x-5 items-center">
              {product.images.map((item) => (
                <div
                  key={item.id}
                  className="h-24 w-24 overflow-hidden rounded-lg border border-gray-200 mt-5"
                >
                  <img
                    key={item.id}
                    alt={item.alt}
                    src={item.src}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 mxxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2  ">
              <h5 className="text-lg lg:text-x1 font-semibold text-gray-900">
                Universaloutfit
              </h5>
              <h5 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">
                Casual shirts for men
              </h5>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-semibold">{product.price}</p>
                <p className="opacity-50 line-through">
                  {product.compareAtPrice}
                </p>
                <p className="text-green-600 font-semibold">
                  {product.discountedPrice}
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <div className="flex flex-center space-x-3">
                  <Rating name="read-only" value={4.5} readOnly precision={0.5} />
                  <p className="opacity-50 text-sm">56540 Ratings</p>
                  <p className="m1-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    3870 Reviews
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <div className="grid grid-cols-4 gap-3">
                      {product.sizes.map((size) => (
                        <label
                          key={size.id}
                          aria-label={size.name}
                          className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                        >
                          <input
                            defaultValue={size.id}
                            defaultChecked={size === product.sizes[2]}
                            name="size"
                            type="radio"
                            disabled={!size.inStock}
                            className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                          />
                          <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                            {size.name}
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>

                <Button
                  className="secondary w-full"
                  variant="contained"
                  sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}
                >
                  Add to Cart
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* rating and review section */}
        <section className="">
          <h5 className="font-semibold text-lg pb-4">
            Recent Review & Ratings
          </h5>
          <div className="border border-gray-200  p-5">
            <Grid container spacing={3}>
              <Grid item xs={12} md={7}>
                <div className="space-y-5">
                  {[1, 1, 1].map((item) => (
                    <ProductReviewCard />
                  ))}
                </div>
              </Grid>

              <Grid item xs={12} md={5} marginLeft={7}>
                <h5 className="text-xl font-semibold pb-1">Product Ratings</h5>
                <div className="flex items-center space-x-3">
                  <Rating value={4.5} readOnly precision={0.5} />
                  <p className="opacity-60">5850 Ratings</p>
                </div>

                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <p className="text-sm w-20">Excellent</p>
                    <div className="flex-1 w-[400px]">
                      <LinearProgress 
                        variant="determinate"
                        value={40}
                        color="success"
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                      />
                    </div>
                    <p className="text-sm opacity-60 w-16 text-right">19259</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <p className="text-sm w-20">Very Good</p>
                    <div className="flex-1 w-[400px]">
                      <LinearProgress 
                        variant="determinate"
                        value={30}
                        color="success"
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                      />
                    </div>
                    <p className="text-sm opacity-60 w-16 text-right">8546</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <p className="text-sm w-20">Good</p>
                    <div className="flex-1 w-[400px]">
                      <LinearProgress 
                        variant="determinate"
                        value={25}
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        
                      />
                    </div>
                    <p className="text-sm opacity-60 w-16 text-right">5326</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <p className="text-sm w-20">Average</p>
                    <div className="flex-1 w-[400px]">
                      <LinearProgress 
                        variant="determinate"
                        value={15}
                        color="warning"
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 2, height: 7 }}
                      />
                    </div>
                    <p className="text-sm opacity-60 w-16 text-right">3485</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <p className="text-sm w-20">Poor</p>
                    <div className="flex-1 w-[400px]">
                      <LinearProgress 
                        variant="determinate"
                        value={5}
                        color="error"
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                      />
                    </div>
                    <p className="text-sm opacity-60 w-16 text-right">1258</p>
                  </div>
                </div>
                 
              </Grid>
            </Grid>
          </div>
        </section>
      </div>
    </div>
  );
}
