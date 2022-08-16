import { SET_CURRENT_EMPLOYEE } from "../constants/Constant";

const currentEmployeeState = {} 

const currentEmployeeReducer = (state = currentEmployeeState , action) => {
  switch (action.type) {
    case SET_CURRENT_EMPLOYEE :
      return state = action.payload
  
    default:
      return state
  }
}

export default currentEmployeeReducer ;