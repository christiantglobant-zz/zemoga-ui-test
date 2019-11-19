import styled from "styled-components";
import Container from "../../../../../components/Container";

const ListCardVotePercentageBar = styled(Container).attrs(() => ({
  className: "ListCardVotePercentageBar"
}))`
  left: 0;
  bottom: 0;
  width: 100%;
  position: absolute;

  .Button {
    min-width: 10%;
    cursor: pointer;
    transition: width 2s;
    :first-of-type {
      justify-content: flex-start;
      width: ${({ upPercent }) => upPercent}%;
      background-color: rgba(60, 188, 183, 0.6);
      ::after {
        font-size: 1.7rem;
        margin-left: 0.5rem;
        content: "${({ upPercent }) => upPercent}%";
      }
      :hover::after {
        content: "${({ upVotes }) => upVotes}";
      }
    }
    :last-of-type {
      justify-content: flex-end;
      background-color: rgba(250, 178, 49, 0.6);
      width: ${({ downPercent }) => downPercent}%;
      ::before {
        font-size: 1.7rem;
        margin-right: 0.5rem;
        content: "${({ downPercent }) => downPercent}%";
      }

      :hover::before {
        content: "${({ downVotes }) => downVotes}";
      }
    }
  }
`;

export default ListCardVotePercentageBar;
