import { combineReducers } from "redux";
import { FETCH_USER, SET_THEME, FETCH_USER_FAIL } from "./types";

const initialUserState = {
  user: null,
  error: null,
};

const initialThemeState = {
  theme: "light",
};

export function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    case FETCH_USER_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case SET_THEME:
      return { theme: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
});

export default rootReducer;
