import { SET_GAME_SETUP, NEW_GAME } from "../types";

import { setPlayers } from "./game.actions";

export function setupFullGame(setup) {
  return (dispatch) => {
    dispatch(setGame(setup));
    dispatch(setPlayers(setup.players));
  };
}

export function setGame(setup) {
  return (dispatch) => {
    dispatch({
      type: SET_GAME_SETUP,
      payload: setup,
    });
  };
}

export function newGame() {
  return (dispatch) => {
    dispatch({
      type: NEW_GAME,
    });
  };
}
