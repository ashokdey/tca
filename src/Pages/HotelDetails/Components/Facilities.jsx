import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

export default function HotelCard({ featureHeading = 'N/A', showViewMore = false, viewMoreURL = '#', features = [], }) {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title={featureHeading} bordered style={{ width: "100%", margin: 10 }}>
        {
          features && features.length ?
            <ul>
              {
                features.map((feature, i) => <li key={i}>{feature}</li>)
              }
            </ul>
            : null
        }
        {
          showViewMore ? <Link to={viewMoreURL}>View More</Link> : null
        }
      </Card>
    </div>
  )
}