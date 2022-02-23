import { PAUSE_GAME, SET_MOVE, START_GAME } from "../types";

const initialScoreState = {
  moves: 0,
  solvedTiles: [],
  hasStarted: false,
  pauseGame: false,
};

export function scoreReducer(state = initialScoreState, action) {
  switch (action.type) {
    case SET_MOVE:
      return { ...state, moves: state.moves + 1 };
    case START_GAME:
      return { ...state, hasStarted: true };
    case PAUSE_GAME:
      return { ...state, pauseGame: true };
    default:
      return state;
  }
}
