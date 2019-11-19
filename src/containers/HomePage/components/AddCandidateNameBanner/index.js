import React from "react";

import BannerContainer from "./styles/AddCandidateBannerContainer";
import BannerText from "./styles/AddCandidateBannerText";

import Button from "../../../../components/Button";

const AddCandidateNameBanner = () => {
  return (
    <BannerContainer>
      <BannerText>Is there anyone else you would want us to add?</BannerText>
      <Button>Submit a Name</Button>
    </BannerContainer>
  );
};

export default AddCandidateNameBanner;
