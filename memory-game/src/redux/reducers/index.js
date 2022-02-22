import { combineReducers } from "redux";
import { gameSetupReducer } from "./gameSetup.reducer";
import { gameReducer } from "./game.reducer";
import { scoreReducer } from "./score.reducer";

const rootReducer = combineReducers({
  setup: gameSetupReducer,
  game: gameReducer,
  score: scoreReducer,
});

export default rootReducer;
