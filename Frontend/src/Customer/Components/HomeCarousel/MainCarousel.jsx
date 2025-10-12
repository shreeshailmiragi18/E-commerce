 import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MainCarouselData from './MainCarouselData';


const MainCarousel = () => {
    const items = MainCarouselData.map((item) => (
    <img  className= "cursor-pointer h-100 w-full" role="presentation" src={item.image} alt="" />
));
    return (
        <AliceCarousel
            items={items}
            autoPlay
            infinite
            autoPlayInterval={2000}
            disableButtonsControls
            animationDuration={800}
            animationType="ease-in-out"
     
        />
    );
}

export default MainCarousel;