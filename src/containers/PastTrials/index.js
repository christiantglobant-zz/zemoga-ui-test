import React from "react";
import { Helmet } from "react-helmet";
import PastTrialsContainer from "./styles/PastTrialsContainer";
import PastTrialsTitle from "./styles/PastTrialsTitle";

const PastTrials = () => (
  <div>
    <Helmet>
      <title>PastTrials</title>
      <meta name="description" content="How it works page" />
    </Helmet>
    <PastTrialsContainer>
      <PastTrialsTitle>Past trials</PastTrialsTitle>
    </PastTrialsContainer>
  </div>
);
export default PastTrials;
