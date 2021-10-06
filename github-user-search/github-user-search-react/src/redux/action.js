import axios from "axios";
import { FETCH_USER, SET_THEME } from "./types";

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
        console.error(error);
      });
  };
}

export function setTheme(theme) {
  console.log("Set theme action");
  return (dispatch) => {
    dispatch({
      type: SET_THEME,
      payload: theme,
    });
  };
}
