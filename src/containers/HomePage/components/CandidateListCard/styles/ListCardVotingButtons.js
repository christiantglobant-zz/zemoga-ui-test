import styled, { css } from "styled-components";
import Container from "../../../../../components/Container";

const vottingButtonStyle = css`
  width: initial;
  height: fit-content;
  padding: 0.4rem 0.5rem;
  .Image {
    width: 1.2rem;
  }
`;

const ListCardVotingButtons = styled(Container).attrs(() => ({
  className: "ListCardVotingButtons"
}))`
  width: 80%;
  max-width: 12rem;
  align-items: center;
  justify-content: space-between;
  .Button {
    cursor: pointer;
    :nth-child(-n + 2) {
      ${vottingButtonStyle}
    }
  }
`;

export default ListCardVotingButtons;
