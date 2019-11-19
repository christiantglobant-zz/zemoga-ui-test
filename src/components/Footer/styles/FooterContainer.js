import styled from "styled-components";
import Container from "../../Container";

const FooterContainer = styled(Container).attrs(() => ({
  className: "FooterContainer"
}))`
  margin: 2rem 0 1rem;
  align-items: center;
  flex-direction: column;
  border-top: 0.5px dashed black;
  color: ${({ theme }) => theme.colors.secondaryTextColor};

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    flex-direction: row;
    margin: 2rem auto 1rem;
    justify-content: space-between;
  }

  @media ${({ theme }) => theme.device.laptop} {
    width: 60%;
    padding: 1rem 1rem 0;
  }

  @media ${({ theme }) => theme.device.laptopL} {
    width: 45%;
  }
`;

export default FooterContainer;
