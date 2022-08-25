import {
  GET_COMPANY_REQUEST ,
  GET_COMPANY_SUCCESS,
  GET_COMPANY_FAILED,
} from "../constants/Constant";

const initialValue = {
  isLoading : false,
  companyDetail: {},
  isError: null,
};

const getCompanyReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_COMPANY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_COMPANY_SUCCESS:
      return {
        companyDetail: action.payload,
        isLoading: false,
        isError: null,
      };
    case GET_COMPANY_FAILED:
      return {
        isLoading: false,
        companyDetail: {},
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default getCompanyReducer;
