import React, { useState, useEffect } from 'react';
import axios from 'axios';

// custom
import { extraDetailsContext } from '../../../contexts/hotels';
import { getExtraDetailsAPI } from '../../../constants';
import ExtraDetailsCard from '../../../components/HotelDetails/ExtraDetails';

export default function ExtraDetailsContainer() {

  const [extraDetails, setExtraDetails] = useState({});
  const [loadingDetails, setLoadingDetails] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getExtraDetails() {
      try {
        setLoadingDetails(true);
        const res = await axios.get(getExtraDetailsAPI);
        const data = res.data.data;
        setExtraDetails(data);
        setLoadingDetails(false);
      } catch (err) {
        setLoadingDetails(false);
        setError(err.message);
      }
    }
    getExtraDetails();
  }, []);

  return (
    <extraDetailsContext.Provider value={[extraDetails, setExtraDetails]}>
      <ExtraDetailsCard loading={loadingDetails} error={error} />
    </extraDetailsContext.Provider>
  );

}