import React from 'react';
import HotelCard from './HotelCard';

const features = [1, 2, 3, 4, 5]

export default function HotelSideCard({ showPrice }) {
  return (
    <React.Fragment>
      <HotelCard noViewMore features={features} />
    </React.Fragment>
  )
}