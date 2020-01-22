import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import UserReducer from "./User/UserReducers";

export default function rootReducer(history) {
    const reducerMap = {
        router: connectRouter(history),
        user: UserReducer,
    };

    return combineReducers(reducerMap);
}