import { ADD_NEW_VOTE, SAVE_CANDIDATES } from "./constants";

export const addNewVoteAction = (newVote, candidateId) => ({
  type: ADD_NEW_VOTE,
  newVoteData: {
    newVote,
    candidateId
  }
});

export const saveCandidatesAction = candidates => ({
  type: SAVE_CANDIDATES,
  candidates
});
