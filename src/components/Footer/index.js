import React from "react";

import FooterContainer from "./styles/FooterContainer";
import FooterNavigation from "./styles/FooterNavigation";
import FooterLink from "./styles/FooterLink";
import FooterSocialNetworks from "./styles/FooterSocialNetworks";


import FontLight from "../FontLight";
import Image from "../Image";

import facebookIcon from "../../assets/svg/facebook.svg"
import twitterIcon from "../../assets/svg/twitter.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterNavigation>
        <FooterLink>Terms and Conditions</FooterLink>
        <FooterLink>Privacy Policy</FooterLink>
        <FooterLink>Contact Us</FooterLink>
      </FooterNavigation>
      <FooterSocialNetworks>
        <FontLight>Follow us</FontLight>
        <Image src={facebookIcon} />
        <Image src={twitterIcon} />
      </FooterSocialNetworks>
    </FooterContainer>
  );
};

export default Footer;
