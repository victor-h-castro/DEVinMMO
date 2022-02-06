/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
// @ts-nocheck
// @ts-nocheck
import Slider from 'react-slick';// @ts-nocheck
// @ts-nocheck
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from './Image';

export type CarouselProps = {
  images: string[],
};
export default function Carousel({ images } : CarouselProps) {
  return (

    <Slider
      slidesToShow={1}
      swipeToSlide
      focusOnSelect
      dots
      infinite
      autoplay
      autoplaySpeed={5000}
    >
      { images.map((image, index) => (
        <Image key={index} src={image} />

      ))}
    </Slider>

  );
}
