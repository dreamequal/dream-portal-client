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
    // Logout
    LOGOUT_USER_PENDING,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_ERROR,
} from "./UserActions";

const initialState = {
    profile: {},
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

const UserReducer = (state=initialState, action) => {
    switch(action.type) {
        // Fetch
        case FETCH_USER_PENDING:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                profile: action.payload,
                isLoading: false,
            };
        case FETCH_USER_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading: false
            };
        // Login
        case LOGIN_USER_PENDING:
            return {
                ...state,
                isLoading: true,
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
                isLoading: false,
            };
        case LOGIN_USER_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading: false
            };
        // Register
        case REGISTER_USER_PENDING:
            return {
                ...state,
                isLoading: true,
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                profile: action.payload.profile,
                isAuthenticated: true,
                token: action.payload.token,
                isLoading: false,
            };
        case REGISTER_USER_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading: false
            };
        // Logout
        case LOGOUT_USER_PENDING:
            return {
                ...state,
                isLoading: true,
            };
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                profile: {},
                isAuthenticated: false,
                token: null,
                isLoading: false,
            };
        case LOGOUT_USER_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading: false
            };
		default:
            return state;
    }
}

export default UserReducer;