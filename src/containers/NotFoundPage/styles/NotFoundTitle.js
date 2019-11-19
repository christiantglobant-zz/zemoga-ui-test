import styled from "styled-components";

const NotFoundTitle = styled.h1.attrs(() => ({
  className: "NotFoundTitle"
}))`
  width: 100%;
  color: ${({ theme }) => theme.colors.secondaryTextColor}; 
`;

export default NotFoundTitle;
