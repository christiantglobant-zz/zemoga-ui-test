import styled from "styled-components";

const Image = styled.img.attrs(() => ({
  className: "Image"
}))`
  width: ${({ width = "1.5rem" }) => width};
`;

export default Image;
