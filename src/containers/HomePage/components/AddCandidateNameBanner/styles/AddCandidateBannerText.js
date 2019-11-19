import styled from "styled-components";

const AddCandidateBannerText = styled.div.attrs(() => ({
  className: "AddCandidateBannerText"
}))`
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
  margin-right: 1rem;  

  @media ${({ theme }) => theme.device.tablet} {
    text-align: left;
  }
`;

export default AddCandidateBannerText;
