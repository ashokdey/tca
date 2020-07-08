import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

export default function PageNotFound() {
  return (
    <React.Fragment>
      <Row>
        <Col offset={8}>
          <br />
          <br />
          <br />
          <h1>Ahh, you are moving too far</h1>
          <Link to="/">Return to Home</Link>
        </Col>
      </Row>
    </React.Fragment>
  )
}