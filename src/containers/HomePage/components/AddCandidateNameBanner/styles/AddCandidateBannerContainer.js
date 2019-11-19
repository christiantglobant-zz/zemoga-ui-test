import styled from "styled-components";
import Container from "../../../../../components/Container";

import cityImage from "../../../../../assets/jpg/city.jpg";

const AddCandidateBannerContainer = styled(Container).attrs(() => ({
  className: "AddCandidateBannerContainer"
}))`
  padding: 1rem 1.3rem;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.85),
      rgba(255, 255, 255, 0.85)
    ),
    url(${cityImage});
  color: ${({ theme }) => theme.colors.secondaryTextColor};

  .Button {
    font-weight: 600;
    margin-top: 1rem;
    font-size: 1.1rem;
    min-width: fit-content;
    padding: 0.8rem 1.5rem;
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    border: 0.1rem solid ${({ theme }) => theme.colors.secondaryTextColor};
  }

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: row;   
    .Button {
      font-size: 1.3rem;
    }
  }

  @media ${({ theme }) => theme.device.laptop} {
    max-width: 65%;
    margin: 1rem auto;
  }

  @media ${({ theme }) => theme.device.laptopL} {
    max-width: 48.6%;
  }
`;

export default AddCandidateBannerContainer;
