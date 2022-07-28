import axios from "axios";
import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/Constant";
const jobPost = ()=> async(dispatch)=>{
    dispatch({type: GET_TODOS_REQUEST});
    try {
        const res = await axios.get('job.json');
        dispatch({
            type: GET_TODOS_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_TODOS_FAILED,
            payload: error.message
        })
    }
   
}
export default jobPost