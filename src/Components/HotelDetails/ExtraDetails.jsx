import React, { useContext } from 'react';
import { Row, Col } from 'antd';

// custom 
import EssentialsCard from './EssentialsCard';
import PolicyCard from './PolicyCard';
import Loading from '../Generic/Loading';
import { extraDetailsContext } from '../../contexts/hotels';

export default function ExtraDetailsCard({ loading = true, error = '' }) {

  const [extraDetails] = useContext(extraDetailsContext);
  const { essentials, policies } = extraDetails;

  return (
    <>
      {
        loading ? <Loading /> : error ? <h3>{error}</h3> :
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
      }
    </>
  )
}