import { RECALL_API } from "../constants/Constant";

const recall = true 

const recallApiReducer = (state = recall , action) => {
  switch (action.type) {
    case RECALL_API :
      return state = action.payload
  
    default:
      return state
  }
}

export default recallApiReducer ;