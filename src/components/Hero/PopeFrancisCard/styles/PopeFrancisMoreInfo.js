import styled from "styled-components";

const PopeFrancisMoreInfo = styled.a.attrs(() => ({
  className: "PopeFrancisMoreInfo"
}))`
  display: flex;
  margin: 1rem 0;
  font-size: .9rem;
  align-items: center;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.primaryTextColor};
`;

export default PopeFrancisMoreInfo;
