import React from 'react';
import HotelCard from '../../../Components/HotelCard';
import { findMinPrice } from '../../../utils';

export default function HotelSideCard({ hotel = {}, detailsLoading = false }) {
  const price = hotel && hotel.price && findMinPrice(hotel.price);

  return (
    <HotelCard
      hotelName={hotel.name}
      location={hotel.locality}
      city={hotel.city}
      price={price}
      booking
      noViewMore
      detailsLoading={detailsLoading} />
  )
}
