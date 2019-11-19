import React, { useState } from "react";
import moment from "moment";

import CardName from "./styles/CandidateListCardName";
import CardContainer from "./styles/CandidateListCardContainer";
import VotePercentageBar from "./styles/ListCardVotePercentageBar";
import CardPublishDate from "./styles/CandidateListCardPublishDate";
import CardDescription from "./styles/CandidateListCardDescription";
import VotingButtonsContainer from "./styles/ListCardVotingButtons";
import CardInfoContainer from "./styles/CandidateListCardInfoContainer";

import Button from "../../../../components/Button";
import Image from "../../../../components/Image";

import likeIcon from "../../../../assets/svg/like_icon.svg";
import dislikeIcon from "../../../../assets/svg/dislike_icon.svg";

// Constants related to buttons type
const [LIKE, DISLIKE, VOTE_NOW, VOTE_AGAIN] = [
  "+1",
  "-1",
  "voteNow",
  "voteAgain"
];

let newVote;

const CandidateListCard = ({ candidate, votes, addNewVoteAction }) => {
  const {
    name,
    topic,
    imageUrl,
    description,
    publishedDate,
    id: candidateId
  } = candidate;

  const { upVotes = 0, downVotes = 0 } = votes || {};

  const candidateHasAGoodScore = upVotes > downVotes;

  const [buttonPressed, setButtonPresset] = useState("");

  const onPressVotingButton = type => {
    if (type === LIKE || type === DISLIKE) {
      newVote = type;
    }
    if (type !== buttonPressed) {
      const buttonType = type === VOTE_AGAIN ? "" : type;
      if (newVote && buttonType === VOTE_NOW && addNewVoteAction) {
        addNewVoteAction(newVote, candidateId);
      }
      setButtonPresset(buttonType);
    }
  };

  const renderCandidateInfo = () => (
    <CardInfoContainer>
      <Button buttonStyle={candidateHasAGoodScore ? "primary" : "secondary"}>
        <Image src={candidateHasAGoodScore ? likeIcon : dislikeIcon} />
      </Button>
      <CardName>{name}</CardName>
      <CardPublishDate>
        {moment(publishedDate).fromNow()} in {topic}
      </CardPublishDate>
      <CardDescription>
        {buttonPressed === VOTE_NOW ? "Thank you for voting!" : description}
      </CardDescription>
    </CardInfoContainer>
  );

  const renderVotingButtons = () => (
    <VotingButtonsContainer>
      {buttonPressed === VOTE_NOW ? (
        <Button onClick={() => onPressVotingButton(VOTE_AGAIN)}>
          Vote again
        </Button>
      ) : (
        [
          <Button
            key={LIKE}
            buttonId={LIKE}
            buttonStyle="primary"
            buttonActive={buttonPressed}
            onClick={() => onPressVotingButton(LIKE)}
          >
            <Image src={likeIcon} />
          </Button>,
          <Button
            key={DISLIKE}
            buttonId={DISLIKE}
            buttonStyle="secondary"
            buttonActive={buttonPressed}
            onClick={() => onPressVotingButton(DISLIKE)}
          >
            <Image src={dislikeIcon} />
          </Button>,
          <Button
            key={VOTE_NOW}
            buttonId={VOTE_NOW}
            disabled={!buttonPressed}
            buttonActive={buttonPressed}
            onClick={() => onPressVotingButton(VOTE_NOW)}
          >
            Vote now
          </Button>
        ]
      )}
    </VotingButtonsContainer>
  );

  const renderVotePercentageBar = () => {
    const totalVotes = upVotes + downVotes;

    let upVotesPercent = 0;
    let downVotesPercent = 0;

    if (totalVotes > 0) {
      upVotesPercent = ((upVotes * 100) / totalVotes).toFixed(0);
      downVotesPercent = 100 - upVotesPercent;
    }

    return (
      <VotePercentageBar
        upVotes={upVotes}
        downVotes={downVotes}
        upPercent={upVotesPercent}
        downPercent={downVotesPercent}
      >
        <Button buttonStyle="primary">
          <Image src={likeIcon} />
        </Button>
        <Button buttonStyle="secondary">
          <Image src={dislikeIcon} />
        </Button>
      </VotePercentageBar>
    );
  };

  return (
    <CardContainer imageUrl={imageUrl}>
      {renderCandidateInfo()}
      {renderVotingButtons()}
      {votes && renderVotePercentageBar()}
    </CardContainer>
  );
};

export default CandidateListCard;
