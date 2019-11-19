import styled from "styled-components";

const FooterNavigation = styled.ul.attrs(() => ({
  className: "FooterNavigation"
}))`  
  padding: 0;
  border: none;
  display: flex;
  max-width: 25rem;
  list-style: none;    
  justify-content: space-around;
`;

export default FooterNavigation;
