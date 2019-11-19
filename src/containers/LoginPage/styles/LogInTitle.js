import styled from "styled-components";

const LogInTitle = styled.h1.attrs(() => ({
  className: "LogInTitle"
}))`
  width: 100%;
  color: ${({ theme }) => theme.colors.secondaryTextColor}; 
`;

export default LogInTitle;
