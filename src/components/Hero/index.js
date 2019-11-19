import React from "react";

import HeroContainer from "./styles/HeroContainer";
import ClosingTimeBar from "./ClosingTimeBar";
import PopeFrancisCard from "./PopeFrancisCard";


const Hero = () => {
  return (
    <HeroContainer>
      <PopeFrancisCard />
      <ClosingTimeBar />
    </HeroContainer>
  );
};

export default Hero;
