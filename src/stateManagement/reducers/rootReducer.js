import { combineReducers } from "redux";
import currentEmployeeReducer from "./currentEmployeeReducer";
import jobPostReducer from "./jobPostReducer";

 const rootReducer = combineReducers({
   jobPostState : jobPostReducer ,
   currentEmployeeData : currentEmployeeReducer ,
 })

 export default rootReducer ;