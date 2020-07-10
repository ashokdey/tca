import React from 'react';
import HotelFeatureCard from '../Generic/FeaturesCard';

/** Using the feature card but view more is not meaningful here  */

export default function PolicyCard({ policies = [] }) {
  return (
    <HotelFeatureCard featureHeading="Policies" features={policies} showViewMore />
  );
}