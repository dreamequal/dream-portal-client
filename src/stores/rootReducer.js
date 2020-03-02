import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import UserReducer from "./User/UserReducers";
import AnnouncementReducer from "./Announcement/AnnouncementReducers";
import ResourceReducer from "./Resource/ResourceReducers";
import ResourceCategoryReducer from "./ResourceCategory/ResourceCategoryReducers";

export default function rootReducer(history) {
    const reducerMap = {
        router: connectRouter(history),
        user: UserReducer,
        announcements: AnnouncementReducer,
        resources: ResourceReducer,
        resourceCategories: ResourceCategoryReducer,
    };

    return combineReducers(reducerMap);
}