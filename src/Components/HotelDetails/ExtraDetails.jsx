import React from 'react';
import { Row, Col } from 'antd';

// custom 
import EssentialsCard from './EssentialsCard';
import PolicyCard from './PolicyCard';

export default function ExtraDetailsCard({ essentials = [], policies = [] }) {
  return (
    <>
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
    </>
  )
}