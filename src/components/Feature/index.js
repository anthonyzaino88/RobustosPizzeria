import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Ragazzone Grande</h1>
      <p>"The Big Boy" features organic wild caught shrimp, grass-fed and finished beef and veal meatballs, basil, garlic, with our in-house fra diavolo sauce.</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
