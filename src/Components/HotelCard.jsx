import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

export default function HotleCard({ hotelId, hotelName, location, city, price }) {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title={hotelName} bordered style={{ width: "100%", margin: 10 }}>
        <p>City: {city}</p>
        <p>Locality: {location}</p>
        {
          price ?
            <h5>Price: Rs. {price}</h5>
            : <h5>Sold Out</h5>
        }
        <Link to={`/hotels/${hotelId}`}>View Details</Link>
      </Card>
    </div>
  )
}