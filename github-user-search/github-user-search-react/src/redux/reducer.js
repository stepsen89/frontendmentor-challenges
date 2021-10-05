import { combineReducers } from "redux";
const initialUserState = {
  user: null,
};

export function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case "FETCH_USER":
      return {
        user: action.payload,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
