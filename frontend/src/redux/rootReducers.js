import { combineReducers } from "redux";

import { changeState } from "./reducers";


const rootReducer = combineReducers({
  changeState,
});

export default rootReducer;
