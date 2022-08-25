import fetching from "../../hooks/UseAddUserInfo/fetching";
import {
  GET_JOB_TITLE_REQUEST,
  GET_JOB_TITLE_SUCCESS,
  GET_JOB_TITLE_FAILED,
} from "../constants/Constant";

const getJobTitleAction = (companySecret) => {
  return (dispatch) => {
    dispatch({ type: GET_JOB_TITLE_REQUEST });
    fetching
      .get(`/job-post/job-title?companySecret=${companySecret}`)
      .then((res) => {
        dispatch({ type: GET_JOB_TITLE_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: GET_JOB_TITLE_FAILED, payload: error.message });
      });
  };
};

export default getJobTitleAction;
