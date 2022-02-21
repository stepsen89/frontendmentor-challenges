import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import reduxThunk from "redux-thunk";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for redux devTools

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxThunk))
  );
}
