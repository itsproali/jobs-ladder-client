import {
  GET_TASK_REQUEST,
  GET_TASK_SUCCESS,
  GET_TASK_FAILED,
} from "../constants/Constant";

const initialValue = {
  isLoading: false,
  tasks: [],
  error: null,
};

const getTaskReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TASK_SUCCESS:
      return {
        isLoading: false,
        tasks: action.payload,
        error: null,
      };
    case GET_TASK_FAILED:
      return {
        isLoading: false,
        tasks: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default getTaskReducer;
