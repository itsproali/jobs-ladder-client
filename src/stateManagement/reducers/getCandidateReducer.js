import {
  GET_CANDIDATE_REQUEST,
  GET_CANDIDATE_SUCCESS,
  GET_CANDIDATE_FAILED,
} from "../constants/Constant";

const initialValue = {
  candidateLoading: false,
  candidates: [],
  candidateError: null,
};

const getCandidateReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_CANDIDATE_REQUEST:
      return {
        ...state,
        candidateLoading: true,
      };
    case GET_CANDIDATE_SUCCESS:
      return {
        candidates: action.payload,
        candidateLoading: false,
        candidateError: null,
      };
    case GET_CANDIDATE_FAILED:
      return {
        ...state,
        candidateError: action.payload,
      };

    default:
      return state;
  }
};

export default getCandidateReducer;