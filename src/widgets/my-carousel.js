import React, { Component } from 'react'
import Slider from 'react-slick'

import bar from './process-header.jpg'
import 'slick-carousel/slick/slick.css'

class MyCarousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div> <img src={ bar } /> </div>
        <div> <img src={ bar } /> </div>
        <div> <img src={ bar } /> </div>
        <div> <img src={ bar } /> </div>
      </Slider>
    );
  }
};

export default MyCarousel;
