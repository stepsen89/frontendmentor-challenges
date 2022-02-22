import { INIT_GAME, SET_SOLVED, SET_PLAYER_WIN, SET_PLAYERS } from "../types";

export function initialiseGame(items) {
  console.log(items);
  return (dispatch) => {
    dispatch({
      type: INIT_GAME,
      payload: items,
    });
  };
}

export function setSolved(value) {
  console.log(value);
  return (dispatch) => {
    dispatch({
      type: SET_SOLVED,
      payload: value,
    });
  };
}

export function setPlayers(players) {
  console.log("I m here");
  return (dispatch) => {
    dispatch({
      type: SET_PLAYERS,
      payload: players,
    });
  };
}

export function setPlayerWin(player, stats) {
  return (dispatch) => {
    dispatch({
      type: SET_PLAYER_WIN,
      payload: { player, stats },
    });
  };
}

export function resetGame(value) {
  console.log(value);
  return (dispatch) => {
    dispatch({
      type: SET_SOLVED,
      payload: value,
    });
  };
}

export function startNewGame(value) {
  console.log(value);
  return (dispatch) => {
    dispatch({
      type: SET_SOLVED,
      payload: value,
    });
  };
}
