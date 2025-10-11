import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] border border-gray-200 mx-4">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/2024/SEPTEMBER/14/256Syt0l_ce983b9aac374777a28a73e5f8a24439.jpg"
          alt="Product"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">Snitch</h3>
        <p className="mt-2 text-sm text-gray-500">
          Men solid pure cotton White Shirt
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
