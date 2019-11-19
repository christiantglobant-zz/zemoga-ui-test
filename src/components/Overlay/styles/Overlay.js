import styled from 'styled-components';

const Overlay = styled.div.attrs(() => ({
  className: "Overlay"
}))`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.overlayBackground};
`;

export default Overlay;
