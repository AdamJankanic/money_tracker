import { combineReducers } from "redux";
import recordReducer from "./Records";
const rootReducer = combineReducers({
  recordStore: recordReducer,
});

export default rootReducer;
