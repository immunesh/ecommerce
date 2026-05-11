
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
  };
 const slidePrev = () =>
  setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));

const slideNext = () =>
  setActiveIndex((prev) =>
    prev < items.length - 1 ? prev + 1 : prev
  );

  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  const items = data.slice(0,10).map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));
  return (
    <div className="px-4 lg:px-8 ">
      <div className="relative p-5">
        <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
        <AliceCarousel
          items={items}
          displayButtonsControls
          responsive={responsive}
          disableButtonsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex!==items.length-5 && <Button
          variant="contained"
          aria-label="next"
          className="z-50 bg-white"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}
        <Button
        onClick={slidePrev}
          variant="contained"
          aria-label="prev"
          className="z-50 bg-white"
          
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(-90deg)",
            bgcolor: "white",
          }}
        >
          <KeyboardArrowRightIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
