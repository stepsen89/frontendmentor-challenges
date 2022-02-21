import { INIT_GAME, SET_SOLVED } from "../types";

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
