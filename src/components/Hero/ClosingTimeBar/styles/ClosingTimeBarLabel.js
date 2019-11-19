import styled from 'styled-components';

const ClosingTimeBarLabel = styled.div.attrs(() => ({
  className: "ClosingTimeBarLabel"
}))`
  width: 35%;
  display: flex;
  align-items: center;
  padding-top: 0.3rem;
  padding-right: .8rem;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.primaryTextColor};

  @media ${({ theme }) => theme.device.tablet} {    
    font-size: 1.3rem;
    padding-right: 1.8rem;
  }

  @media ${({ theme }) => theme.device.laptop} {    
    font-size: 1.5rem;
    padding-right: 2.8rem;
  }
`;

export default ClosingTimeBarLabel;
