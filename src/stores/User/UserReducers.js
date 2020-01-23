import {
    FETCH_USER_PENDING,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    REGISTER_USER_PENDING,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
} from "./UserActions";

const initialState = {
    user: {},
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

const UserReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_USER_PENDING:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
            };
        case FETCH_USER_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading: false
            };
        case REGISTER_USER_PENDING:
            return {
                ...state,
                isLoading: true,
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                isLoading: false,
            };
        case REGISTER_USER_ERROR:
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