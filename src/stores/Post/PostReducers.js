import { LOCATION_CHANGE } from "connected-react-router";

import {
    // Fetch
    FETCH_POSTS_PENDING,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR,
    // Create
    CREATE_POST_PENDING,
    CREATE_POST_SUCCESS,
    CREATE_POST_ERROR,
} from "./PostActions";

const reducerDefaults = {
    fetch: {
        isLoading: false,
        error: false,
    },
    create: {
        isLoading: false,
        error: false,
        success: false,
    },
};

const initialState = {
    posts: [],
    pageCount: 0,
    ...reducerDefaults,
};

const PostReducer = (state=initialState, action) => {
    switch(action.type) {
        // Fetch
        case FETCH_POSTS_PENDING:
            return {
                ...state,
                fetch: { isLoading: true },
            };
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: [...state.posts, ...action.payload.posts],
                pageCount: action.payload.pageCount,
                fetch: { isLoading: false, error: false },
            };
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                fetch: { isLoading: false, error: action.error },
            };
        // Create
        case CREATE_POST_PENDING:
            return {
                ...state,
                create: { isLoading: true, success: false },
            };
        case CREATE_POST_SUCCESS:
            return {
                ...state,
                posts: [action.payload, ...state.posts],
                create: { isLoading: false, error: false, success: true },
            };
        case CREATE_POST_ERROR:
            return {
                ...state,
                create: { isLoading: false, error: action.error, success: false },
            };
        case LOCATION_CHANGE:
            return {
                ...initialState,
            }
		default:
            return state;
    }
}

export default PostReducer;