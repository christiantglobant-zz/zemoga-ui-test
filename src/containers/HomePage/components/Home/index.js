import React, { useEffect } from "react";

import { Helmet } from "react-helmet";

import Hero from "../../../../components/Hero";
import PrincipalBanner from "../../../../components/PrincipalBanner";
import CandidateList from "../CandidateList";
import AddCandidateNameBanner from "../AddCandidateNameBanner";

const Home = ({
  votes,
  candidates,
  addNewVoteAction,
  fetchCandidatesAction
}) => {
  useEffect(() => {
    // next line will be called when component is mounted
    if (!candidates.length) {
      fetchCandidatesAction();
    }
  });

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home page" />
      </Helmet>
      <Hero />
      <PrincipalBanner />
      <CandidateList
        votes={votes}
        candidates={candidates}
        addNewVoteAction={addNewVoteAction}
      />
      <AddCandidateNameBanner />
    </div>
  );
};

export default Home;
