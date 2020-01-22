export const FETCH_USER_PENDING = "FETCH_USER_PENDING";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";

export const fetchUserPending = () => {
    return {
        type: FETCH_USER_PENDING
    }
}

export const fetchUserSuccess = (payload) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload,
    }
}

export const fetchUserError = (error) => {
    return {
        type: FETCH_USER_ERROR,
        error,
    }
}