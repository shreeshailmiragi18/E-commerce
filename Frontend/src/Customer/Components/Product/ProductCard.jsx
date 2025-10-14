import React from 'react'
import './ProductCard.css'

const ProductCard = () => {
  return (
      <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
          <div claassName='h-[20rem]'>
              <img className='h-full w-full object-cover object-left-top ' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70" alt="" />
          </div>
          <div className="textPart bg-white p-3">
              <div>
                  <p className='font-bold opacity-60 text-left'>Pothys</p>
                  <p className='text-left'>yellow silk kurthas for man wsdfaservdsf</p>
                 
              </div>
              <div className="flex items-center space-x-2 ">
                  <p className='font-semibold'>&#x20B9;99</p>
                  <p className='line-through opacity-50'>&#x20B9;199</p>
                  <p className='text-green-600 font-semibold'>70% off</p>
              </div>
          </div>
      
    </div>
  )
}

export default ProductCard;
 