import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

// custom
import Carousal from '../Generic/Carousel';
import Search from '../Generic/Search';
import HotelRoomsList from './HotelRoomsList';
import HotelSideCard from './HotelSideCard';
import ReviewList from '../Generic/Reviews';
import Loading from '../Generic/Loading';
import { IMAGES } from '../..//constants';
import ExtraDetailsCard from '../../containers/HotelDetails/ExtraDetails';

export default function HotelDetailsPage({ hotel = {}, rooms = [], loading, essentials = [], policies = [], detailsLoading, error }) {
  return (
    <React.Fragment>
      {
        loading ?
          <Row>
            <Col span={12} offset={8}>
              <div style={{ marginTop: '30em' }}>
                <Loading />
              </div>
            </Col>
          </Row>
          :
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
                <HotelSideCard
                  hotel={hotel}
                  detailsLoading={detailsLoading}
                />
              </Col>
            </Row>
            <ExtraDetailsCard essentials={essentials} policies={policies} />
            <Row>
              <Col span={16} offset={4}>
                <HotelRoomsList
                  rooms={rooms}
                  heading={"Available Rooms"}
                  city={hotel.city}
                  location={hotel.locality}
                />
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
