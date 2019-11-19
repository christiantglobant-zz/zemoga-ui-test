import styled from "styled-components";

const PastTrialsTitle = styled.h1.attrs(() => ({
  className: "PastTrialsTitle"
}))`
  width: 100%;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export default PastTrialsTitle;
