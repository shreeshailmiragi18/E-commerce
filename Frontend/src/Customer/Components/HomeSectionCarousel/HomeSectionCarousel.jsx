import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import { useState,useRef } from "react";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null); 
 const responsive = {
  0: { items: 1 },
  640: { items: 2 },
  900: { items: 3 },
  1200: { items: 5 },
  1600: { items: 6 },
};


 const slidePrev = () => carouselRef.current?.slidePrev();
  const slideNext = () => carouselRef.current?.slideNext();

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.slice(0,10).map((item, index) => (
    <div key={index} className="mx-3">
      <HomeSectionCard product={item} />
    </div>
  ));

  return (
    <div className=" border border-gray-100 shadow-md rounded-lg">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5 text-left pl-5">
        {sectionName}
      </h2>
      <div className="relative p-5 ">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
         
        />
        {activeIndex < items.length - 5 && (
          <Button
            className="z-50 bg-white"
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translatex(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            onClick={slideNext}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}

        {activeIndex > 0 && (
          <Button
            className="z-50 bg-white"
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translatex(-50%) rotate(-90deg)",
              bgcolor: "white",
            }}
            onClick={slidePrev}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
