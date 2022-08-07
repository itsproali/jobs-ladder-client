import fetching from "../../hooks/UseAddUserInfo/fetching";
import {
  GET_JOB_POST_FAILED,
  GET_JOB_POST_REQUEST,
  GET_JOB_POST_SUCCESS,
} from "../constants/Constant";

// const getJobPosts = ()=> async(dispatch)=>{
//     dispatch({type: GET_TODOS_REQUEST});
//     try {
//         const res = await axios.get('job.json');
//         dispatch({
//             type: GET_TODOS_SUCCESS,
//             payload: res.data
//         })
//     } catch (error) {
//         dispatch({
//             type: GET_TODOS_FAILED,
//             payload: error.message
//         })
//     }

// }
const getJobPosts = (filter) => {
  let query;
  if (filter?.companySecret) {
    query = `companySecret=${filter?.companySecret}`;
  } else {
    query = `currentPage=${filter?.currentPage}`;
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
