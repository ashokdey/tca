import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

// custom
import Carousal from '../Components/Carousel';
import Search from '../Components/Search';
import HotelCards from '../Components/HotelCard';
import HotelSideCard from '../Components/HotelSideCard';
import ReviewList from '../Components/Reviews';
import Loading from '../Components/Loading';

// creating dummy images
const images = [1, 2, 3, 4].map(num => "https://picsum.photos/900/300")

export default function HotelDetailsPage({ hotel = {}, rooms = [], loading, essentials, policies, detailsLoading, error }) {
  return (
    <React.Fragment>
      {
        loading ?
          <React.Fragment>
            <Row>
              <Col span={12} offset={8}>
                <br />
                <br />
                <br />
                <br />
                <Loading />
              </Col>
            </Row>
          </React.Fragment> :
          <React.Fragment>
            <Row>
              <Col span={16} offset={4}>
                <br />
                <br />
                <Link to={`/`}>Back to Home</Link>
                <br />
                <br />
                <Search />
              </Col>
            </Row>
            <Row>
              <Col offset={4} span={12} >
                <div style={{ height: '20em', width: '50em' }}>
                  <br />
                  <Carousal screens={images} />
                </div>
              </Col>
              <Col span={4}>
                <br />
                <HotelSideCard essentials={essentials} policies={policies} detailsLoading={detailsLoading} />
              </Col>
            </Row>
            <Row>
              <Col span={16} offset={4}>
                <br />
                <br />
                <br />
                <br />
                <h3>Room Types </h3>
                {
                  rooms && rooms.length ?
                    rooms.map(((room, i) => <HotelCards key={i} hotelName={room.name} price={room.price} />))
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
