import styled from "styled-components";
import menuIcon from "../../../assets/svg/hamburger_menu.svg";

const HeaderHamburgerMenu = styled.button.attrs(() => ({
  className: "HeaderHamburgerMenu"
}))`
  border: none;
  outline: none;
  width: 1.8rem;
  height: 1.8rem;
  background-size: contain;
  background-color: transparent;
  background: transparent url(${menuIcon}) no-repeat;

  @media ${({ theme }) => theme.device.laptop} {
    display: none
  }
`;

export default HeaderHamburgerMenu;
