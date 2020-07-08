import React from 'react';
import HotelCard from './HotelCard';
import { findMinPrice } from '../utils';

export default function HotelSideCard({ hotel, essentials, policies, detailsLoading }) {
  const price = hotel && hotel.price && findMinPrice(hotel.price);

  return (
    <HotelCard
      hotelName={hotel.name}
      location={hotel.locality}
      city={hotel.city}
      price={price}
      booking
      noViewMore
      policies={policies}
      essentials={essentials}
      detailsLoading={detailsLoading} />
  )
}
