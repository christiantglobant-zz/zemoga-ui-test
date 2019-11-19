import styled from "styled-components";

const PopeFrancisCardDescription = styled.div.attrs(() => ({
  className: "PopeFrancisCardDescription"
}))`
  margin-top: 1rem;
  line-height: 1.2;

  @media ${({ theme }) => theme.device.laptop} {
    font-size: 1.3rem;
  }
`;

export default PopeFrancisCardDescription;
