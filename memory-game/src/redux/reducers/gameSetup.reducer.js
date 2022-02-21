import { SET_GAME_SETUP } from "../types";

const initialSetupState = {
  done: false,
  setup: {
    theme: null,
    players: null,
    grid: null,
  },
};

export function gameSetupReducer(state = initialSetupState, action) {
  switch (action.type) {
    case SET_GAME_SETUP:
      return { setup: action.payload };
    default:
      return state;
  }
}
