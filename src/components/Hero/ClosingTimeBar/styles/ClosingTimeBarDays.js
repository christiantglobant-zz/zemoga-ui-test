import styled from "styled-components";

const ClosingTimeBarDays = styled.time.attrs(() => ({
  className: "ClosingTimeBarDays"
}))`
  width: 65%;
  font-size: 2.25rem;
  padding-top: .5rem;
  padding-left: .8rem;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  background-color: ${({ theme }) => theme.colors.closingInLabelBackground};
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 100%,
    0% 100%,
    0% calc(50% + .3rem),
    0.35rem 50%,
    0% calc(50% - .3rem)
  );
`;

export default ClosingTimeBarDays;
