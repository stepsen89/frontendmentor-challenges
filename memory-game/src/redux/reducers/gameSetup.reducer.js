import { SET_GAME_SETUP, NEW_GAME } from "../types";

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
      return { setup: action.payload, done: true };
    case NEW_GAME:
      return { setup: { theme: null, players: null, grid: null }, done: false };
    default:
      return state;
  }
}
