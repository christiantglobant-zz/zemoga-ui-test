import styled from "styled-components";

const HeaderNavigation = styled.nav.attrs(() => ({
  className: "HeaderNavigation"
}))`
  width: 85%;
  top: 3rem;
  display: flex;
  min-height: 100vh;
  position: absolute;
  transition: ease 0.5s;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  left: ${({ showNavigation }) => (showNavigation ? "0" : "-85")}%;

  .Image {
    width: 1.8rem;
    height: 1.8rem;
    margin: 1rem 0;
    padding: 0 1.8rem;
  }

  @media ${({ theme }) => theme.device.laptop} {
    position: initial;
    flex-direction: row;
    align-items: center;
    min-height: fit-content;
    justify-content: flex-end;
    background-color: transparent;
  }
`;

export default HeaderNavigation;
