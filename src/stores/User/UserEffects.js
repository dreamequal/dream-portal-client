import { AuthFetch } from "../../utils/api";

import {
    fetchUserPending,
    fetchUserSuccess,
    fetchUserError,
    registerUserPending,
    registerUserSuccess,
    registerUserError,
} from "./UserActions";

export const fetchUser = (token) => {
    return dispatch => {
        dispatch(fetchUserPending());

        AuthFetch("private", {
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