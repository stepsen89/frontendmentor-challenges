import { SET_GAME_SETUP } from "./types";

export function setTheme(theme) {
  return (dispatch) => {
    dispatch({
      type: SET_GAME_SETUP,
      payload: setup,
    });
  };
}
