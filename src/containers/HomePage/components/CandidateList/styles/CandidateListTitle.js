import styled from "styled-components";

const CandidateListTitle = styled.h1.attrs(() => ({
  className: "CandidateListTitle"
}))`
  margin: 0;
  width: 100%;
  font-weight: 100;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export default CandidateListTitle;
