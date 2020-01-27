import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import UserReducer from "./User/UserReducers";
import PostReducer from "./Post/PostReducers";
import ResourceReducer from "./Resource/ResourceReducers";
import ResourceCategoryReducer from "./ResourceCategory/ResourceCategoryReducers";

export default function rootReducer(history) {
    const reducerMap = {
        router: connectRouter(history),
        user: UserReducer,
        posts: PostReducer,
        resources: ResourceReducer,
        resourceCategories: ResourceCategoryReducer,
    };

    return combineReducers(reducerMap);
}