import styled from "styled-components";

const CandidateListCardContainer = styled.article.attrs(() => ({
  className: "CandidateListCardContainer"
}))`
  display: flex;
  margin: 2rem auto;
  min-height: 30rem;
  position: relative;
  flex-direction: column;
  background-size: cover;
  padding: 2rem 2rem 5rem;
  background-position: 50%;
  justify-content: flex-end;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.61) 37%,
      rgba(0, 0, 0, 0) 74%
    ),
    url(${({ imageUrl }) => imageUrl});
  color: ${({ theme }) => theme.colors.primaryTextColor};

  @media ${({ theme }) => theme.device.tablet} {    
    width: calc(100% / 2.5);
  }

  @media ${({ theme }) => theme.device.laptopL} {    
    width: calc(100% / 2.4);
  }
`;

export default CandidateListCardContainer;
