import { SET_GAME_SETUP, SET_PLAYERS } from "../types";

import { setPlayers } from "./game.actions";

export function setupFullGame(setup) {
  return (dispatch) => {
    dispatch(setGame(setup));
    dispatch(setPlayers(setup.players));
  };
}

export function setGame(setup) {
  console.log("was executed");
  return (dispatch) => {
    dispatch({
      type: SET_GAME_SETUP,
      payload: setup,
    });
  };
}
