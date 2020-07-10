import React from 'react';
import HotelCard from '../HotelCard/HotelCard';
import { NA } from '../../constants';

export default function HotelRoomsList({ heading = NA, rooms = [], city = NA, location = NA }) {
  return (
    <React.Fragment>
      <h3 style={{ marginTop: '3em' }}>{heading}</h3>
      {
        rooms && rooms.length ?
          rooms.map(((room, i) =>
            <HotelCard
              key={i}
              hotelName={room.name}
              price={room.price}
              city={city}
              location={location}
            />))
          : null
      }
    </React.Fragment>
  );
}