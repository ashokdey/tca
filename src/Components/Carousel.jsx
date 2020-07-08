import React from 'react';
import { Carousel } from 'antd';

export default function HotelCarousel({ screens = [] }) {
  return (
    <React.Fragment>
      <Carousel autoplay>
        {
          screens.map((img, i) => {
            return (
              <div key={i}>
                <img key={i} src={img} alt="thumb 1" />
              </div>
            );
          })
        }
      </Carousel>
    </React.Fragment>
  )
}