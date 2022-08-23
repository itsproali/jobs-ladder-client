import { combineReducers } from "redux";
import currentEmployeeReducer from "./currentEmployeeReducer";
import getTaskReducer from "./getTaskReducer";
import jobPostReducer from "./jobPostReducer";
import recallApiReducer from "./recallApiReducer";

const rootReducer = combineReducers({
  jobPostState: jobPostReducer,
  currentEmployeeData: currentEmployeeReducer,
  recallApi: recallApiReducer,
  getTasks: getTaskReducer,
});

export default rootReducer;
