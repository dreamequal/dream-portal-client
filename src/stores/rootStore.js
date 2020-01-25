import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./rootReducer";

export default function rootStore(initialState, history) {
    const middleware = [thunk, routerMiddleware(history),];

    const store = createStore(rootReducer(history), initialState, applyMiddleware(...middleware));

    return store;
  }