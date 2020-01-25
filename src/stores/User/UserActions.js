export const FETCH_USER_PENDING = "FETCH_USER_PENDING";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";

export const LOGIN_USER_PENDING = "LOGIN_USER_PENDING";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

export const REGISTER_USER_PENDING = "REGISTER_USER_PENDING";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const UPDATE_USER_PENDING = "UPDATE_USER_PENDING";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";

export const LOGOUT_USER_PENDING = "LOGOUT_USER_PENDING";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const LOGOUT_USER_ERROR = "LOGOUT_USER_ERROR";

/**
 * Fetch user actions
 */
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

/**
 * Login user actions
 */
export const loginUserPending = () => {
    return {
        type: LOGIN_USER_PENDING
    }
}

export const loginUserSuccess = (payload) => {
    return {
        type: LOGIN_USER_SUCCESS,
        isAuthenticated: true,
        payload,
    }
}

export const loginUserError = (error) => {
    return {
        type: LOGIN_USER_ERROR,
        error,
    }
}

/**
 * Register user actions
 */
export const registerUserPending = () => {
    return {
        type: REGISTER_USER_PENDING
    }
}

export const registerUserSuccess = (payload) => {
    return {
        type: REGISTER_USER_SUCCESS,
        isAuthenticated: true,
        payload,
    }
}

export const registerUserError = (error) => {
    return {
        type: REGISTER_USER_ERROR,
        error,
    }
}

/**
 * Update user actions
 */
export const updateUserPending = () => {
    return {
        type: UPDATE_USER_PENDING
    }
}

export const updateUserSuccess = (payload) => {
    return {
        type: UPDATE_USER_SUCCESS,
        payload,
    }
}

export const updateUserError = (error) => {
    return {
        type: UPDATE_USER_ERROR,
        error,
    }
}

/**
 * Logout user actions
 */
export const logoutUserPending = () => {
    return {
        type: LOGOUT_USER_PENDING
    }
}

export const logoutUserSuccess = (payload) => {
    return {
        type: LOGOUT_USER_SUCCESS,
    }
}

export const logoutUserError = (error) => {
    return {
        type: LOGOUT_USER_ERROR,
        error,
    }
}
