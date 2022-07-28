import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import jobpostReducer from "./reduxServices/reducers/Reducers";

const store = createStore(jobpostReducer, applyMiddleware(thunk))
export default store;