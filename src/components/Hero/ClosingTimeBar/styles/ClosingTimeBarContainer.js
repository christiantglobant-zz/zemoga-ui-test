import styled from "styled-components";

const ClosingTimeBarContainer = styled.div.attrs(() => ({
  className: "ClosingTimeBarContainer"
}))`
  bottom: 0;
  width: 100%;
  display: flex;
  height: 3.5rem;
  overflow: hidden;
  position: absolute;
  background: ${({ theme }) => theme.colors.closingInLabelColor};
`;

export default ClosingTimeBarContainer;
