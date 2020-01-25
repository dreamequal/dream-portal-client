import { LOCATION_CHANGE } from "connected-react-router";

import { getToken } from "../../utils/profile";

import {
    // Fetch
    FETCH_USER_PENDING,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    // Login
    LOGIN_USER_PENDING,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    // Register
    REGISTER_USER_PENDING,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    // Update
    UPDATE_USER_PENDING,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    // Logout
    LOGOUT_USER_PENDING,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_ERROR,
} from "./UserActions";

const reducerDefaults = {
    register: {
        isLoading: false,
        error: false,
    },
    fetch: {
        isLoading: false,
        error: false,
    },
    login: {
        isLoading: false,
        error: false,
    },
    update: {
        isLoading: false,
        error: false,
        success: false,
    },
    logout: {
        isLoading: false,
        error: false,
    },
};

const initialState = {
    profile: {},
    token: null,
    isAuthenticated: !!getToken(),
    error: null,
    ...reducerDefaults,
};

const UserReducer = (state=initialState, action) => {
    switch(action.type) {
        // Fetch
        case FETCH_USER_PENDING:
            return {
                ...state,
                fetch: { isLoading: true },
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                profile: action.payload,
                fetch: { isLoading: false, error: false },
            };
        case FETCH_USER_ERROR:
            return {
                ...state,
                fetch: { isLoading: false, error: action.error },
            };
        // Login
        case LOGIN_USER_PENDING:
            return {
                ...state,
                login: { isLoading: true },
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
                login: { isLoading: false, error: false },
            };
        case LOGIN_USER_ERROR:
            return {
                ...state,
                login: { isLoading: false, error: action.error },
            };
        // Register
        case REGISTER_USER_PENDING:
            return {
                ...state,
                register: { isLoading: true },
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                profile: action.payload.profile,
                isAuthenticated: true,
                token: action.payload.token,
                register: { isLoading: false, error: false },
            };
        case REGISTER_USER_ERROR:
            return {
                ...state,
                register: { isLoading: false, error: action.error },
            };
        // Update
        case UPDATE_USER_PENDING:
            return {
                ...state,
                update: { isLoading: true, success: false },
            };
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                profile: action.payload,
                update: { isLoading: false, error: false, success: true },
            };
        case UPDATE_USER_ERROR:
            return {
                ...state,
                update: { isLoading: false, error: action.error, success: false },
            };
        // Logout
        case LOGOUT_USER_PENDING:
            return {
                ...state,
                logout: { isLoading: true },
            };
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                profile: {},
                isAuthenticated: false,
                token: null,
                logout: { isLoading: false, error: false },
            };
        case LOGOUT_USER_ERROR:
            return {
                ...state,
                logout: { isLoading: false, error: action.error },
            };
        case LOCATION_CHANGE:
            return {
                ...state,
                ...reducerDefaults,
            }
		default:
            return state;
    }
}

export default UserReducer;