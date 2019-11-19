import React from "react";

import Container from "./styles/CandidateListContainer";
import Title from "./styles/CandidateListTitle";
import CandidateListCard from "../CandidateListCard";

const CandidateList = ({ votes, candidates, addNewVoteAction }) => {
  return (
    <Container>
      <Title>Votes</Title>
      {candidates.map(candidate => (
        <CandidateListCard
          key={candidate.id}
          candidate={candidate}
          votes={votes[candidate.id]}
          addNewVoteAction={addNewVoteAction}
        />
      ))}
    </Container>
  );
};

export default CandidateList;
