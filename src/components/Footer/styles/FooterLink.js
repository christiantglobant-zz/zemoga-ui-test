import styled from "styled-components";

const FooterLink = styled.a.attrs(() => ({
  className: "FooterLink"
}))`
  font-weight: 300;
  margin: 0 0.5rem;
  font-size: 0.8rem;
  min-width: fit-content;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1rem;
  }
`;

export default FooterLink;
