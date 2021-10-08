import axios from "axios";
import { FETCH_USER, SET_THEME, FETCH_USER_FAIL } from "./types";

export function getUser(username) {
  return (dispatch) => {
    return axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        console.log("res", response);
        dispatch({
          type: FETCH_USER,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("Error", error);
        dispatch({
          type: FETCH_USER_FAIL,
          payload: error.response.data,
        });
      });
  };
}

export function setTheme(theme) {
  return (dispatch) => {
    dispatch({
      type: SET_THEME,
      payload: theme,
    });
  };
}
