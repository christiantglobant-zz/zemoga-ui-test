import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderNavigationLink = styled(Link).attrs(() => ({
  className: "HeaderNavigationLink"
}))`
  margin: 1rem 0;
  cursor: pointer;
  font-weight: 100;
  padding: 0 1.8rem;
  font-size: 1.3rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryTextColor};

  &:hover {
    color: ${({ theme }) => theme.colors.fontColorOver};
  }

  @media ${({ theme }) => theme.device.laptop} {
    font-size: 1.1rem;
    &:hover {
      color: ${({ theme }) => theme.colors.primaryTextColor};
    }
  }

  @media ${({ theme }) => theme.device.laptopL} {
    font-size: 1.3rem;
  }
`;

export default HeaderNavigationLink;
