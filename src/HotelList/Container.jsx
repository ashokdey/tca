/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import SearchBar from '../Components/Search';
import HotelCard from '../Components/HotelCard';
import Loading from '../Components/Loading';
import { findMinPrice, resolveAPICalls } from '../utils';
import { getHotelsAPI, getPriceAPI } from '../constants';

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
      const res = await resolveAPICalls([getHotelsAPI, getPriceAPI]);
      setHotels(res);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <React.Fragment>
      {
        error ? <h3>{error}</h3> :
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
                  <Loading />

                  : hotels.map(hotel => (
                    <HotelCard
                      key={hotel.id}
                      hotelId={hotel.id}
                      hotelName={hotel.name}
                      location={hotel.locality}
                      city={hotel.city}
                      viewMore
                      price={findMinPrice(hotel.price)}
                    />
                  ))
                }
              </Col>
            </Row>
          </React.Fragment>
      }
    </React.Fragment>
  );
}