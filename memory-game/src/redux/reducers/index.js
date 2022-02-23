import { combineReducers } from "redux";
import { gameSetupReducer } from "./gameSetup.reducer";
import { gameReducer } from "./game.reducer";

const rootReducer = combineReducers({
  setup: gameSetupReducer,
  game: gameReducer,
});

export default rootReducer;
