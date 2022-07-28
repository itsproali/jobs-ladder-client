import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/Constant";

const initialState = {
    isLoading : false,
    jobPost: [],
    error: null
}
const jobpostReducer=(state = initialState , action)=>{
    switch (action.type) {
        case GET_TODOS_REQUEST:
            
            return {
                ...state,
                isLoading: true
            }
        case GET_TODOS_SUCCESS:
            return {
                isLoading: false,
                jobPost: action.payload,
                error: null
            }
            case GET_TODOS_FAILED:
                return {
                    isLoading: false,
                    jobPost: [],
                    error: action.payload
                }
        default:
            return state;
    }
}
export default jobpostReducer