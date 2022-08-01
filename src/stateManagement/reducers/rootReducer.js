import { combineReducers } from "redux";
import jobPostReducer from "./jobPostReducer";

 const rootReducer = combineReducers({
   jobPostState : jobPostReducer ,
 })

 export default rootReducer ;