import styled from "styled-components";

import Container from '../../../components/Container';

const HowItWorksContainer = styled(Container).attrs(() => ({
  className: "HowItWorksContainer"
}))`
  width: 100%;
  height: 68vh;
  text-align: center;
  margin-top: 3.5rem;

  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 6.5rem;
  }
`;

export default HowItWorksContainer;
