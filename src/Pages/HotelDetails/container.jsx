/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import Component from './component';
import { resolveAPICalls } from '../../utils';
import { getHotelsAPI, getPriceAPI, getExtraDetailsAPI } from '../../constants';
import axios from 'axios';

export default function HotelDetails({ match }) {

  const [hotel, setHotel] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);

  const [policies, setPolicies] = useState([]);
  const [essentials, setEssentials] = useState([]);
  const [detailsError, setDetailsError] = useState('');
  const [detailsLoading, setDetailsLoading] = useState(true);

  useEffect(() => {
    axios.get(getExtraDetailsAPI).then((data) => {
      data = data.data;
      setPolicies(data.data.policies);
      setEssentials(data.data.essentials);
      setDetailsLoading(false);
    }).catch(err => {
      setDetailsError(err.message);
      setDetailsLoading(false);
    })
  }, []);

  useEffect(() => {
    getHotelDetails();
  }, []);

  const getHotelDetails = async () => {
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

  console.log("hotels in details container ==========>", hotel);

  return (
    <Component
      hotel={hotel && hotel.length && hotel[0]}
      rooms={rooms}
      policies={policies}
      essentials={essentials}
      loading={loading}
      detailsLoading={detailsLoading}
      error={error}
      detailsError={detailsError} />
  );
}