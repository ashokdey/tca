import React from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';

export default function HotelCard({ hotelId, hotelName, location, city, viewMore, price, booking, essentials, policies, detailsLoading }) {


  return (
    <div className="site-card-border-less-wrapper">
      <Card title={hotelName} bordered style={{ width: "100%", margin: 10 }}>
        {!!city && <p>City: {city}</p>}
        {!!location && <p>Locality: {location}</p>}
        {
          !!price ?
            <h5>Price: Rs. {price}</h5>
            : <h5>Sold Out</h5>
        }
        {
          booking && price ? <Button type="primary">Book Now</Button> : null
        }
        <br />
        {
          essentials && essentials.length ?
            <React.Fragment>
              <h3>Essentials</h3>
              <ul>
                {
                  essentials.map((essential, i) => <li key={i}>{essential}</li>)
                }
              </ul>
            </React.Fragment> : null
        }
        {
          policies && policies.length ?
            <React.Fragment>
              <h3>Policies</h3>
              <ul>
                {
                  policies.map((feature, i) => <li key={i}>{feature}</li>)
                }
              </ul>
            </React.Fragment> : null
        }
        {
          viewMore ? <Link to={`/hotels/${hotelId}`}>View Details</Link> : null
        }
      </Card>
    </div>
  )
}