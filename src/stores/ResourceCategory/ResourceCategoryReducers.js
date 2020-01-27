import { LOCATION_CHANGE } from "connected-react-router";

import {
    // Fetch
    FETCH_CATEGORIES_PENDING,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_ERROR,
    // Create
    CREATE_CATEGORY_PENDING,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_ERROR,
} from "./ResourceCategoryActions";

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
    categories: [],
    ...reducerDefaults,
};

const CategoryReducer = (state=initialState, action) => {
    switch(action.type) {
        // Fetch
        case FETCH_CATEGORIES_PENDING:
            return {
                ...state,
                fetch: { isLoading: true },
            };
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                fetch: { isLoading: false, error: false },
            };
        case FETCH_CATEGORIES_ERROR:
            return {
                ...state,
                fetch: { isLoading: false, error: action.error },
            };
        // Create
        case CREATE_CATEGORY_PENDING:
            return {
                ...state,
                create: { isLoading: true, success: false },
            };
        case CREATE_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: [...state.categories, action.payload],
                create: { isLoading: false, error: false, success: true },
            };
        case CREATE_CATEGORY_ERROR:
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

export default CategoryReducer;