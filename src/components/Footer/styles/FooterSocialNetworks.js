import styled from "styled-components";
import Container from "../../Container";

const FooterSocialNetworks = styled(Container).attrs(() => ({
  className: "FooterSocialNetworks"
}))`
  max-width: 20rem;
  font-size: 0.8rem;
  .FontLight,
  .Image {
    margin: 0 0.5rem;
  }

  @media ${({ theme }) => theme.device.tablet} {
    .FontLight {
      display: flex;
      font-size: 1rem;
      align-items: center;
    }
  }
`;

export default FooterSocialNetworks;
