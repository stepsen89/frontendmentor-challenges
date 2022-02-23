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
    // case SET_SCORE:
    //   let arr = state.items;
    //   for (var key in state.items) {
    //     if (state.items[key].value === action.payload) {
    //       state.items[key].solved = true;
    //     }
    //   }
    //   return { items: arr };
    default:
      return state;
  }
}
