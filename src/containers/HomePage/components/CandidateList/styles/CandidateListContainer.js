import styled from "styled-components";

const CandidateListContainer = styled.main.attrs(() => ({
  className: "CandidateListContainer"
}))`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2.5rem;
  justify-content: space-between;

  @media ${({ theme }) => theme.device.laptop} {
    max-width: 70%;
    margin: 2rem auto 0;
  }

  @media ${({ theme }) => theme.device.laptopL} {
    max-width: 51.7%;    
  }
`;

export default CandidateListContainer;
