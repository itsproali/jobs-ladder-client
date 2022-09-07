import fetching from "../../hooks/UseAddUserInfo/fetching";
import {
  SET_USER_ROLE_REQUEST,
  SET_USER_ROLE_SUCCESS,
  SET_USER_ROLE_FAILED,
} from "../constants/Constant";

const setUserRoleAction = (user) => async (dispatch) => {
  // console.log(user);
  dispatch({ type: SET_USER_ROLE_REQUEST });
  fetching
    .get(`/users?email=${user.email}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: SET_USER_ROLE_SUCCESS, payload: res.data[0] });
    })
    .catch((err) =>
      dispatch({ type: SET_USER_ROLE_FAILED, payload: err.message })
    );
};

export default setUserRoleAction;
