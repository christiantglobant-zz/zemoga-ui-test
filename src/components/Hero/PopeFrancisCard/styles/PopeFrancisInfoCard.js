import styled from "styled-components";

const PopeFrancisInfoCard = styled.div.attrs(() => ({
  className: "PopeFrancisInfoCard"
}))`
  display: flex;
  position: relative;
  padding: 2rem 1.6rem;
  flex-direction: column;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.primaryTextColor};

  .FontBold:first-of-type {
    font-size: 1.8rem;
  }

  .FontBold:last-of-type {
    font-size: 1.3rem;
    margin-top: 1.5rem;
  }

  @media ${({ theme }) => theme.device.laptop} {
    font-size: 1.1rem;
    .FontBold:first-of-type {
      font-size: 2.8rem;
    }
  }
`;

export default PopeFrancisInfoCard;
