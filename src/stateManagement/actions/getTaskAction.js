import fetching from "../../hooks/UseAddUserInfo/fetching";
import {
  GET_TASK_REQUEST,
  GET_TASK_SUCCESS,
  GET_TASK_FAILED,
} from "../constants/Constant";

const getTaskAction = (email) => {
  return (dispatch) => {
    dispatch({ type: GET_TASK_REQUEST });
    fetching(`/tasks?email=${email}`)
      .then((res) => dispatch({ type: GET_TASK_SUCCESS, payload: res.data }))
      .catch((error) =>
        dispatch({ type: GET_TASK_FAILED, payload: error.message })
      );
  };
};

export default getTaskAction;
