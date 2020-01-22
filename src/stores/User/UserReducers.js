import {
    FETCH_USER_PENDING,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
} from "./UserActions";

const initialState = {
    user: {},
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
		default:
            return state;
    }
}

export default UserReducer;