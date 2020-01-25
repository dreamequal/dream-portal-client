import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import UserReducer from "./User/UserReducers";
import PostReducer from "./Post/PostReducers";

export default function rootReducer(history) {
    const reducerMap = {
        router: connectRouter(history),
        user: UserReducer,
        posts: PostReducer,
    };

    return combineReducers(reducerMap);
}