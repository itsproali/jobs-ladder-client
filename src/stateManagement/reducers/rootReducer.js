import { combineReducers } from "redux";
import currentEmployeeReducer from "./currentEmployeeReducer";
import jobPostReducer from "./jobPostReducer";
import recallApiReducer from "./recallApiReducer";

 const rootReducer = combineReducers({
   jobPostState : jobPostReducer ,
   currentEmployeeData : currentEmployeeReducer ,
    recallApi: recallApiReducer
 })

 export default rootReducer ;