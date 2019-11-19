import styled from "styled-components";
import Container from "../../../../../components/Container";

const CandidateListCardInfoContainer = styled(Container).attrs(() => ({
  className: "CandidateListCardInfoContainer"
}))`
  position: relative;
  flex-direction: column;

  .Button {
    top: 0.7rem;
    width: 2rem;
    left: -2rem;
    position: absolute;
    height: fit-content;
    padding: 0.4rem 0.5rem;
    .Image {
      width: 1.2rem;
    }
  }
`;

export default CandidateListCardInfoContainer;
