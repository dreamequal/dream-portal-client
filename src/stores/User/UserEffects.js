import { AuthFetch } from "../../utils/api";

import {
    // Fetch
    fetchUserPending,
    fetchUserSuccess,
    fetchUserError,
    // Login
    loginUserPending,
    loginUserSuccess,
    loginUserError,
    // Register
    registerUserPending,
    registerUserSuccess,
    registerUserError,
    // Logout
    logoutUserPending,
    logoutUserSuccess,
} from "./UserActions";

export const fetchUser = (token) => {
    return dispatch => {
        dispatch(fetchUserPending());

        AuthFetch("me", {
            method: "GET",
            headers: {
                Authorization: `JWT ${token}`
            },
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw(res.error);
                }
                dispatch(fetchUserSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchUserError(error));
            })
    }
};


export const loginUser = (user) => {
    return dispatch => {
        dispatch(loginUserPending());

        AuthFetch("login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(res => {
                if (res.message) {
                    throw(res.message);
                }

                dispatch(loginUserSuccess(res));
                return res;
            })
            .catch(error => {
                console.log(error);
                dispatch(loginUserError(error));
            })
    }
};

export const registerUser = (user) => {
    return dispatch => {
        dispatch(registerUserPending());

        AuthFetch("register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(res => {
                if (res.message) {
                    throw(res.message);
                }
                dispatch(registerUserSuccess(res));
                return res;
            })
            .catch(error => {
                console.log(error);
                dispatch(registerUserError(error));
            })
    }
};


export const logoutUser = () => {
    return dispatch => {
        dispatch(logoutUserPending());

        localStorage.removeItem("auth-token");

        dispatch(logoutUserSuccess());
    }
};