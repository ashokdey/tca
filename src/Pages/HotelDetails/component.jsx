import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

// custom
import Carousal from '../../Components/Carousel';
import Search from '../../Components/Search';
import HotelRoomsList from './Components/HotelRoomsList';
import HotelSideCard from '../../Components/HotelSideCard';
import ReviewList from '../../Components/Reviews';
import Loading from '../../Components/Loading';
import { IMAGES } from '../../constants';
import EssentialsCard from './Components/EssentialsCard';
import PolicyCard from './Components/PolicyCard';

export default function HotelDetailsPage({ hotel = {}, rooms = [], loading, essentials = [], policies = [], detailsLoading, error }) {
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
                  detailsLoading={detailsLoading}
                />
              </Col>
            </Row>
            <Row>
              <Col span={8} offset={4}>
                {
                  essentials.length ?
                    <EssentialsCard essentials={essentials} />
                    : null
                }
              </Col>
              <Col span={8}>
                {
                  policies.length ?
                    <PolicyCard policies={policies} />
                    : null
                }
              </Col>
            </Row>
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
