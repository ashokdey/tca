/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import Component from './component';
import { resolveAPICalls } from '../utils';
import { getHotelsAPI, getPriceAPI } from '../constants';

export default function HotelDetails({ match }) {

  const [hotel, setHotel] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    try {
      setLoading(true);
      const res = await resolveAPICalls([getHotelsAPI, getPriceAPI]);
      // for safe checkconvert both side as string
      const hotelById = res.filter(hotel => String(hotel.id) === String(match.params.hotelId));

      const priceObject = hotelById[0].price;
      const keys = Object.keys(priceObject);
      const getRooms = [];

      if (keys && keys.length) {
        keys.forEach(key => {
          getRooms.push({
            name: key,
            price: priceObject[key]
          })
        })
      }

      setRooms(getRooms);
      setHotel(hotelById);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  console.log({
    rooms, hotel, error, loading
  })

  return (
    <Component
      hotel={hotel}
      rooms={rooms}
      loading={loading}
      error={error} />
  );
}