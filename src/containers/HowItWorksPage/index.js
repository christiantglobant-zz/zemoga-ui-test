import React from "react";
import { Helmet } from "react-helmet";
import HowItWorksContainer from "./styles/HowItWorksContainer";
import HowItWorksTitle from "./styles/HowItWorksTitle";

const HowItWorks = () => (
  <div>
    <Helmet>
      <title>HowItWorks</title>
      <meta name="description" content="How it works page" />
    </Helmet>
    <HowItWorksContainer>
      <HowItWorksTitle>How It Works</HowItWorksTitle>
    </HowItWorksContainer>
  </div>
);
export default HowItWorks;
