import React from 'react';
import HotelFeatureCard from '../../../Components/Generic/FeaturesCard';

/** Using the feature card but view more is not relavant here  */

export default function EssentialsCard({ essentials = [] }) {
  return (
    <HotelFeatureCard featureHeading="Essentials" features={essentials} />
  );
}