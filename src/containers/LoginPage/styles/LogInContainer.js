import styled from "styled-components";

import Container from '../../../components/Container';

const LogInContainer = styled(Container).attrs(() => ({
  className: "LogInContainer"
}))`
  width: 100%;
  height: 68vh;
  text-align: center;
  margin-top: 3.5rem;

  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 6.5rem;
  }
`;

export default LogInContainer;
