import styled from "styled-components";

const HowItWorksTitle = styled.h1.attrs(() => ({
  className: "HowItWorksTitle"
}))`
  width: 100%;
  color: ${({ theme }) => theme.colors.secondaryTextColor}; 
`;

export default HowItWorksTitle;
