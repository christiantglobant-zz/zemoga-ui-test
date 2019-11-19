import React, { useState } from "react";

import Container from "./styles/HeaderContainer";
import Logo from "./styles/HeaderLogo";
import HamburgerMenu from "./styles/HeaderHamburgerMenu";
import HeaderNavigation from "./styles/HeaderNavigation";
import HeaderNavigationLink from "./styles/HeaderNavigationLink";

import Portal from "../Portal";
import Overlay from "../Overlay";
import Image from "../Image";

import searchIcon from "../../assets/svg/search_icon.svg";

const Header = () => {
  const [showNavigation, toggleNavigation] = useState(false);
  return (
    <Container>
      <Logo to="/">Rule of Thumb.</Logo>
      <HamburgerMenu onClick={() => toggleNavigation(!showNavigation)} />
      <HeaderNavigation showNavigation={showNavigation}>
        <HeaderNavigationLink to="/past-trials">
          Past Trials
        </HeaderNavigationLink>
        <HeaderNavigationLink to="/how-it-works">
          How It Works
        </HeaderNavigationLink>
        <HeaderNavigationLink to="/login">
          Log In / Sign Up
        </HeaderNavigationLink>
        <Image src={searchIcon} />
        {showNavigation && (
          <Portal>
            <Overlay
              onClick={() => toggleNavigation(!showNavigation)}
              role="presentation"
            />
          </Portal>
        )}
      </HeaderNavigation>
    </Container>
  );
};

export default Header;
