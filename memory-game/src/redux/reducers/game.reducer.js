import { INIT_GAME, SET_SOLVED } from "../types";

const initialSetupState = {
  items: null,
};

export function gameReducer(state = initialSetupState, action) {
  switch (action.type) {
    case INIT_GAME:
      return { items: action.payload };
    case SET_SOLVED:
      let arr = state.items;
      for (var key in state.items) {
        if (state.items[key].value === action.payload) {
          state.items[key].solved = true;
        }
      }
      return { items: arr };
    default:
      return state;
  }
}
