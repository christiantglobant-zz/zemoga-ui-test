import styled from "styled-components";

const HeaderContainer = styled.header.attrs(() => ({
  className: "HeaderContainer"
}))`
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  height: 3.5rem;
  position: fixed;
  padding: 0 0.5rem;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.headerBackground};

  @media ${({ theme }) => theme.device.tablet} {
    height: 4rem;
  }

  @media ${({ theme }) => theme.device.laptop} {
    height: 6rem;
    padding: 0 6.2rem;
    background-color: transparent;
    background-image: linear-gradient(
      0,
      rgba(51, 51, 51, 0) 0%,
      rgba(51, 51, 51, 0.52941) 49%,
      rgba(51, 51, 51, 0.81961) 100%
    );
  }

  @media ${({ theme }) => theme.device.laptopL} {
    padding: 0 12rem;
  }
`;

export default HeaderContainer;
