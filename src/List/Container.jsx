/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Space, Spin } from 'antd';
import SearchBar from '../Components/Search';
import HotelCard from '../Components/HotelCard';
import { findMinPrice } from '../utils';

// const hotels = ["Super Man", "Spiderman", "Batman"];
const getHotelsAPI = "http://www.mocky.io/v2/5a7f24f02e00005200b56875";
const getPriceAPI = "http://www.mocky.io/v2/5a7f23442e00005000b56873";

export default function List() {

  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    try {
      setLoading(true);
      const res = await resolveAPICalls();
      setHotels(res);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  const resolveAPICalls = () => new Promise((resolve, reject) => {
    Promise.all([
      axios.get(getHotelsAPI),
      axios.get(getPriceAPI),
    ]).then(result => {
      const [priceData, hotelData] = result;
      const prices = priceData.data.data;
      const hotels = hotelData.data.data;

      if (Array.isArray(prices) && Array.isArray(hotels)) {
        // Let's use hash map and then create a single hotel object
        // This has complexity of O(n) if data goes to N
        const store = {};

        hotels.map(hotel => {
          if (!store[hotel.id]) {
            store[hotel.id] = hotel;
          }
        });

        prices.map(price => {
          if (store[price.id]) {
            store[price.id].price = price.price;
          }
        });

        // convert the store into array of hotels
        const final = Object.keys(store).map((k) => store[k])
        resolve(final);
      }
    });
  });

  return (
    <React.Fragment>
      <Row>
        <Col span={16} offset={4}>
          <br />
          <SearchBar />
          <br />
        </Col>
      </Row>
      <Row>
        <Col span={15} offset={4}>
          {loading ?
            <Space size="middle">

              <Spin size="large" />
            </Space>

            : hotels.map(hotel => (
              <HotelCard
                key={hotel.id}
                hotelId={hotel.id}
                hotelName={hotel.name}
                location={hotel.locality}
                city={hotel.city}
                price={findMinPrice(hotel.price)}
              />
            ))
          }
        </Col>
      </Row>
    </React.Fragment>
  );
}