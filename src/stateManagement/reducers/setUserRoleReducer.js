import {
  SET_USER_ROLE_REQUEST,
  SET_USER_ROLE_SUCCESS,
  SET_USER_ROLE_FAILED,
} from "../constants/Constant";

const initialValue = {
  roleLoading: false,
  role: null,
  currentUser: null,
  roleError: null,
};

const setUserRoleReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_USER_ROLE_REQUEST:
      return { ...state, roleLoading: true };
    case SET_USER_ROLE_SUCCESS:
      return {
        ...state,
        role: action.payload.role,
        currentUser: action.payload,
      };
    case SET_USER_ROLE_FAILED:
      return {
        ...state,
        roleError: action.payload,
      };

    default:
      return state;
  }
};

export default setUserRoleReducer;
