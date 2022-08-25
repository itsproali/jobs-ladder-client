import fetching from "../../hooks/UseAddUserInfo/fetching";
import {
  GET_CANDIDATE_REQUEST,
  GET_CANDIDATE_SUCCESS,
  GET_CANDIDATE_FAILED,
} from "../constants/Constant";

const getCandidateAction = (jobId) => {
  return (dispatch) => {
    dispatch({ type: GET_CANDIDATE_REQUEST });
    fetching
      .get(`/response?jobId=${jobId}`)
      .then((res) => {
        dispatch({ type: GET_CANDIDATE_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: GET_CANDIDATE_FAILED, payload: error.message });
      });
  };
};

export default getCandidateAction;
