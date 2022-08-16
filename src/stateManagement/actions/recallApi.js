import { RECALL_API } from "../constants/Constant"

const recallApi = (toggle) => {
  return {
    type : RECALL_API ,
    payload  : toggle
  }
}

export default recallApi