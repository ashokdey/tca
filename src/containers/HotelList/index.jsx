/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import { Row, Col } from 'antd';
import SearchBar from '../../components/Generic/Search';
import HotelCard from '../../components/HotelCard';
import Loading from '../../components/Generic/Loading';
import { findMinPrice, resolveAPICalls, createHotelObjectArrays } from '../../utils';
import { getHotelsAPI, getPriceAPI } from '../../constants';
import { hotelsContext } from '../../contexts/hotels';

export default function List() {

  // const [hotels, setHotels] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // get the root context
  const [hotels, setHotels] = useContext(hotelsContext);

  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    try {
      setLoading(true);
      const res = await resolveAPICalls([getHotelsAPI, getPriceAPI]);
      const hotels = createHotelObjectArrays(res);
      setHotels(hotels);
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
                <div style={{ marginTop: '3em', marginBottom: '2em' }}>
                  <SearchBar />
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={15} offset={4}>
                {loading ?
                  <Row>
                    <Col span={12} offset={8}>
                      <div style={{ marginTop: '15em' }}>
                        <Loading />
                      </div>
                    </Col>
                  </Row>
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