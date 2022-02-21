import { combineReducers } from "redux";
import { gameSetupReducer } from "./gameSetup.reducer";

const rootReducer = combineReducers({
  setup: gameSetupReducer,
});

export default rootReducer;
