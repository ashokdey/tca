/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect, useContext } from 'react';
import HotelDetailsPage from '../../components/HotelDetails/HotelDetailsPage';
import { resolveAPICalls, createHotelObjectArrays } from '../../utils';
import { getHotelsAPI, getPriceAPI } from '../../constants';
import { hotelsContext } from '../../contexts/hotels';

export default function HotelDetails({ match }) {

  let [hotels] = useContext(hotelsContext);

  const [hotel, setHotel] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getHotelDetails();
  }, []);

  const getHotelDetails = async () => {
    try {
      setLoading(true);
      if (!hotels.length) {
        const res = await resolveAPICalls([getHotelsAPI, getPriceAPI]);
        hotels = createHotelObjectArrays(res);
      }
      // for safe checkconvert both side as string
      const hotelById = hotels.filter(hotel => String(hotel.id) === String(match.params.hotelId));

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
      setHotel(hotelById[0]);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <HotelDetailsPage
      hotel={hotel}
      rooms={rooms}
      loading={loading}
      error={error}
    />
  );
}