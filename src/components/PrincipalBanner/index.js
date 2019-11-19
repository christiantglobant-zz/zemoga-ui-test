import React from "react";

import Image from "../Image";

import BannerTitle from "./styles/PrincipalBannerTitle";
import BannerSubtitle from "./styles/PrincipalBannerSubtitle";
import BannerContainer from "./styles/PrincipalBannerContainer";
import BannerDescription from "./styles/PrincipalBannerDescription";

import closeIcon from "../../assets/svg/close_icon.svg";
import Container from "../Container";

const PrincipalBanner = () => (
  <BannerContainer>
    <Container>
      <BannerSubtitle>Speak out. Be heard.</BannerSubtitle>
      <BannerTitle>Be counted</BannerTitle>
    </Container>
    <BannerDescription>
      Rule of Thumb is a crowd sourced court of public opinion where anyone and
      everyone can speak out and speak freely. It’s easy: You share your
      opinion, we analyze and put the data in a public report.
    </BannerDescription>
    <Image width="1rem" src={closeIcon} />
  </BannerContainer>
);

export default PrincipalBanner;
