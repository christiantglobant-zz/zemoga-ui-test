import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderLogo = styled(Link).attrs(() => ({
  className: "HeaderLogo"
}))`
  font-size: 1.4rem;
  text-decoration: none;
  min-width: fit-content;
  color: ${({ theme }) => theme.colors.primaryTextColor};

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1.5rem;
  }

  @media ${({ theme }) => theme.device.laptop} {
    font-size: 1.8rem;
  }

  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 2.4rem;
  }
`;

export default HeaderLogo;
