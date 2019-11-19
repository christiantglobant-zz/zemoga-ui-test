import styled from "styled-components";
import Container from "../../../Container";

const PopeFrancisCardContainer = styled(Container).attrs(() => ({
  className: "PopeFrancisCardContainer"
}))`
  width: 80%;
  flex-wrap: wrap;
  max-width: 25rem;
  margin: -3.5rem 0 0;
  background-color: ${({ theme }) => theme.colors.popeFrancisCardBackground};

  .Button {
    width: 50%;
  }

  @media ${({ theme }) => theme.device.laptop} {
    margin-left: 10%;
    max-width: 28rem;
  }
`;

export default PopeFrancisCardContainer;
