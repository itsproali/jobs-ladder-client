import { GET_JOB_POST_FAILED, GET_JOB_POST_REQUEST, GET_JOB_POST_SUCCESS } from "../constants/Constant";

const initialState = {
    isLoading : false,
    jobPost: [],
    error: null
}
const jobPostReducer=(state = initialState , action)=>{
    switch (action.type) {
        case GET_JOB_POST_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_JOB_POST_SUCCESS:
            return {
                isLoading: false,
                jobPost: action.payload,
                error: null
            }
            case GET_JOB_POST_FAILED:
                return {
                    isLoading: false,
                    jobPost: [],
                    error: action.payload
                }
        default:
            return state;
    }
}
export default jobPostReducer 
