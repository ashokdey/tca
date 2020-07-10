import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

// custom
import Carousal from '../../Components/Carousel';
import Search from '../../Components/Search';
import HotelCards from '../../Components/HotelCard';
import HotelSideCard from '../../Components/HotelSideCard';
import ReviewList from '../../Components/Reviews';
import Loading from '../../Components/Loading';
import { IMAGES } from '../../constants';

export default function HotelDetailsPage({ hotel = {}, rooms = [], loading, essentials, policies, detailsLoading, error }) {
  return (
    <React.Fragment>
      {
        loading ?
          <React.Fragment>
            <Row>
              <Col span={12} offset={8}>
                <div style={{ marginTop: '30em' }}>
                  <Loading />
                </div>
              </Col>
            </Row>
          </React.Fragment> :
          <React.Fragment>
            <Row>
              <Col span={16} offset={4}>
                <div style={{ marginTop: '3em', marginBottom: '2em' }}>
                  <Link to={`/`}>Back to Home</Link>
                </div>
                <Search />
              </Col>
            </Row>
            <Row>
              <Col offset={4} span={12} >
                <div style={{ height: '20em', width: '50em', marginTop: '1.5em' }}>
                  <Carousal screens={IMAGES} />
                </div>
              </Col>
              <Col span={4}>
                <br />
                <HotelSideCard
                  hotel={hotel}
                  essentials={essentials}
                  policies={policies}
                  detailsLoading={detailsLoading}
                />
              </Col>
            </Row>
            <Row>
              <Col span={16} offset={4}>
                <h3 style={{ marginTop: '3em' }}>Room Types </h3>
                {
                  rooms && rooms.length ?
                    rooms.map(((room, i) =>
                      <HotelCards
                        key={i}
                        hotelName={room.name}
                        price={room.price}
                        city={hotel.city}
                        location={hotel.locality}
                      />))
                    : null
                }
              </Col>
            </Row>
            <Row>
              <Col span={12} offset={4}>
                <ReviewList />
              </Col>
            </Row>
          </React.Fragment>
      }
    </React.Fragment>
  );
}
