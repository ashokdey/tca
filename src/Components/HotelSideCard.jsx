import React from 'react';
import HotelCard from './HotelCard';
import { findMinPrice } from '../utils';

export default function HotelSideCard({ hotel, essentials, policies, detailsLoading }) {
  const hotelName = hotel && hotel.name;
  const price = hotel && hotel.price && findMinPrice(hotel.price);

  console.log("-----------------hotel -------------", hotel);

  if (hotel && hotel.price)
    console.log('-------------------> price obj', findMinPrice(hotel.price))

  return (
    <React.Fragment>
      <HotelCard hotelName={hotelName} price={price} booking noViewMore policies={policies} essentials={essentials} detailsLoading={detailsLoading} />
    </React.Fragment>
  )
}
