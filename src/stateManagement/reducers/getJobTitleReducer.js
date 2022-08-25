import {
  GET_JOB_TITLE_REQUEST,
  GET_JOB_TITLE_SUCCESS,
  GET_JOB_TITLE_FAILED,
} from "../constants/Constant";

const initialValue = {
  titleLoading: false,
  jobTitles: [],
  titleError: null,
};

const getJobTitleReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_JOB_TITLE_REQUEST:
      return {
        ...state,
        titleLoading: true,
      };
    case GET_JOB_TITLE_SUCCESS:
      return {
        jobTitles: action.payload,
        titleLoading: false,
        titleError: null,
      };
    case GET_JOB_TITLE_FAILED:
      return {
        titleLoading: false,
        jobTitles: [],
        titleError: action.payload,
      };

    default:
      return state;
  }
};

export default getJobTitleReducer;
