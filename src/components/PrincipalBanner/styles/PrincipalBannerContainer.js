import styled from "styled-components";
import Container from "../../Container";

const PrincipalBannerContainer = styled(Container).attrs(() => ({
  className: "PrincipalBannerContainer"
}))`
  padding: 1.7rem;
  margin-top: 2.5rem;
  position: relative;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  background-color: ${({ theme }) => theme.colors.lightGrey};

  .Image {
    top: 2.2rem;
    right: 1rem;
    position: absolute;
  }

  .Container {
    flex-direction: column;
  }

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
    padding: 0.5rem 1.7rem;
    .Container {
      margin-right: 1rem;
      min-width: fit-content;
      justify-content: center;
    }
    .Image {
      position: initial;
    }
  }

  @media ${({ theme }) => theme.device.laptop} {
    max-width: 66%;
    margin: 2.5rem auto 0;
  }

  @media ${({ theme }) => theme.device.laptopL} {
    max-width: 49%;
  }
`;

export default PrincipalBannerContainer;
