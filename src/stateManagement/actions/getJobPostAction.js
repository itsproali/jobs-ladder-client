import fetching from "../../hooks/UseAddUserInfo/fetching";
import {
  GET_JOB_POST_FAILED,
  GET_JOB_POST_REQUEST,
  GET_JOB_POST_SUCCESS,
} from "../constants/Constant";

const getJobPosts = (filter) => {
  let query;
  if (filter.companySecret) {
    if (filter.searchText) {
      query = `companySecret=${filter?.companySecret}&searchText=${filter?.searchText}`;
    } else {
      query = `companySecret=${filter?.companySecret}`;
    }
  } else {
    if (filter.searchText) {
      query = `currentPage=${filter?.currentPage}&searchText=${filter?.searchText}`;
    } else {
      query = `currentPage=${filter?.currentPage}`;
    }
  }
  return (dispatch) => {
    dispatch({ type: GET_JOB_POST_REQUEST });
    fetching
      .get(`/job-post?${query}`)
      .then((data) => {
        dispatch({ type: GET_JOB_POST_SUCCESS, payload: data.data });
      })
      .catch((error) => {
        dispatch({ type: GET_JOB_POST_FAILED, payload: error.message });
      });
  };
};
export default getJobPosts;
