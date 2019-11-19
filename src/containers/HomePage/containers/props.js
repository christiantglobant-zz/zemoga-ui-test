import { addNewVoteAction, saveCandidatesAction } from "./actions";

export const mapStateToProps = ({ homeReducer }) => {
  return { ...homeReducer };
};

export const mapDispatchToProps = dispatch => ({
  dispatch,

  addNewVoteAction: (newVote, candidateId) => {
    dispatch(addNewVoteAction(newVote, candidateId));
  },

  fetchCandidatesAction: () => {
    fetch("/candidates.json")
      .then(response => response.json())
      .then(dataJson => dispatch(saveCandidatesAction(dataJson)));
  }
});
