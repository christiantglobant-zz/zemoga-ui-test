import styled from "styled-components";
import pope from "../../../assets/jpg/pope.jpg";

const HeroContainer = styled.div.attrs(() => ({
  id: "HeroContainer"
}))`
  height: 100vh;
  display: flex;
  min-height: 30rem;
  position: relative;
  align-items: center;
  background-size: cover;
  background-position: 50% 0;
  background-image: url(${pope});
`;

export default HeroContainer;
