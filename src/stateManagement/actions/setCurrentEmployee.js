import { SET_CURRENT_EMPLOYEE } from "../constants/Constant"

const setCurrentEmployee = (employee) => {
  return {
    type : SET_CURRENT_EMPLOYEE ,
    payload  : employee
  }
}

export default setCurrentEmployee