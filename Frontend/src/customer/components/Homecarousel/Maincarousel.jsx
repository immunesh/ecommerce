import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MaincarouselData';

const Maincarousel = () => {

  const items = MainCarouselData.map((item, index) => (
    <img
      key={index}
      src={item.image}
      alt=""
 className="cursor-pointer w-full h-[calc(100vh-80px)] object-cover object-top"
    />
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
};

export default Maincarousel;