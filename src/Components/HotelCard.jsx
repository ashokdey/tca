import React from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';

export default function HotelCard({ hotelId, hotelName, location, city, viewMore, showPrice, price, features }) {


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
          features && features.length ?
            <React.Fragment>
              <ul>
                {
                  features.map(feature => <li>{feature}</li>)
                }
              </ul>
              <Button type="primary">Book Now</Button>
            </React.Fragment> : null
        }
        {
          viewMore ? <Link to={`/hotels/${hotelId}`}>View Details</Link> : null
        }
      </Card>
    </div>
  )
}