import styled from "styled-components";

const PrincipalBannerDescription = styled.p.attrs(() => ({
  className: "PrincipalBannerDescription"
}))`
  font-size: 1rem;
  font-weight: 100;
  line-height: 1.515;

  @media ${({ theme }) => theme.device.tablet} {
    width: 70%;
    margin-right: 2%;
  }
`;

export default PrincipalBannerDescription;
