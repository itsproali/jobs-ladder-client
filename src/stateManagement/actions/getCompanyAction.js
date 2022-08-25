import fetching from "../../hooks/UseAddUserInfo/fetching";
import {
  GET_COMPANY_REQUEST , GET_COMPANY_SUCCESS , GET_COMPANY_FAILED
} from "../constants/Constant";

const getCompanyAction = ({companySecret}) => {
  return (dispatch) => {
    dispatch({ type: GET_COMPANY_REQUEST });
    fetching
      .get(`/company?companySecret=${companySecret}`)
      .then((res) => {
        dispatch({ type: GET_COMPANY_SUCCESS , payload: res.data[0] });
      })
      .catch((error) => {
        dispatch({ type: GET_COMPANY_FAILED, payload: error.message });
      });
  };
};

export default getCompanyAction;
