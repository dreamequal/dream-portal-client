import { LOCATION_CHANGE } from "connected-react-router";

import {
    // Fetch
    FETCH_ANNOUNCEMENTS_PENDING,
    FETCH_ANNOUNCEMENTS_SUCCESS,
    FETCH_ANNOUNCEMENTS_ERROR,
    // Create
    CREATE_ANNOUNCEMENT_PENDING,
    CREATE_ANNOUNCEMENT_SUCCESS,
    CREATE_ANNOUNCEMENT_ERROR,
} from "./AnnouncementActions";

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
    announcements: [],
    pageCount: 0,
    ...reducerDefaults,
};

const AnnouncementReducer = (state=initialState, action) => {
    switch(action.type) {
        // Fetch
        case FETCH_ANNOUNCEMENTS_PENDING:
            return {
                ...state,
                fetch: { isLoading: true },
            };
        case FETCH_ANNOUNCEMENTS_SUCCESS:
            return {
                ...state,
                announcements: [...state.announcements, ...action.payload.announcements],
                pageCount: action.payload.pageCount,
                fetch: { isLoading: false, error: false },
            };
        case FETCH_ANNOUNCEMENTS_ERROR:
            return {
                ...state,
                fetch: { isLoading: false, error: action.error },
            };
        // Create
        case CREATE_ANNOUNCEMENT_PENDING:
            return {
                ...state,
                create: { isLoading: true, success: false },
            };
        case CREATE_ANNOUNCEMENT_SUCCESS:
            return {
                ...state,
                announcements: [action.payload, ...state.announcements],
                create: { isLoading: false, error: false, success: true },
            };
        case CREATE_ANNOUNCEMENT_ERROR:
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

export default AnnouncementReducer;