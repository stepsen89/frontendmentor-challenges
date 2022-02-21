import { SET_GAME_SETUP } from "../types";

export function setGame(setup) {
  return (dispatch) => {
    dispatch({
      type: SET_GAME_SETUP,
      payload: setup,
    });
  };
}
