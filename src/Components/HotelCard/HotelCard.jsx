import React from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';

export default function HotelCard({ hotelId = 0, hotelName = 'N/A', location = 'N/A', city = 'N/A', viewMore = false, price, booking = false }) {


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
        {
          viewMore ? <Link to={`/hotels/${hotelId}`}>View Details</Link> : null
        }
      </Card>
    </div>
  )
}