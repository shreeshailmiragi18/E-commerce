import React, { use } from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${5}`)}
      className="productCard w-[15rem] h-[28rem] m-3 transition-all cursor-pointer overflow-hidden  bg-white flex flex-col"
    >
      <div className="imagePart h-[20rem] overflow-hidden flex-none">
        <img
          className="h-full w-full object-cover object-top"
          src={product.imageUrl}
          alt={product.title || product.brand || "product image"}
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60 text-left">{product.brand}</p>
          <p className="text-left">{product.title}</p>
        </div>
        <div className="flex items-center space-x-2 ">
          <p className="font-semibold">&#x20B9;{product.discountedPrice}</p>
          <p className="line-through opacity-50">&#x20B9;{product.price}</p>
          <p className="text-green-600 font-semibold">
            {product.discountPersent}% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
