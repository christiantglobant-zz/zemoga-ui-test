import { SAVE_CANDIDATES, ADD_NEW_VOTE } from "./constants";

const votesStored = localStorage.votes;
const votes = votesStored ? JSON.parse(votesStored) : {};

export const initialState = {
  votes,
  candidates: []
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CANDIDATES:
      return Object.assign({}, state, {
        candidates: action.candidates
      });
    case ADD_NEW_VOTE:
      const { newVote, candidateId } = action.newVoteData;
      let newVotes = { ...state.votes };
      if (!newVotes[candidateId]) {
        newVotes[candidateId] = {
          upVotes: newVote === "+1" ? 1 : 0,
          downVotes: newVote === "-1" ? 1 : 0
        };
      } else {
        const { upVotes, downVotes } = newVotes[candidateId];
        newVotes[candidateId] = {
          upVotes: newVote === "+1" ? upVotes + 1 : upVotes,
          downVotes: newVote === "-1" ? downVotes + 1 : downVotes
        };
      }
      localStorage.votes = JSON.stringify(newVotes);
      return Object.assign({}, state, {
        votes: newVotes
      });
    default:
      return state;
  }
};

export default homeReducer;
