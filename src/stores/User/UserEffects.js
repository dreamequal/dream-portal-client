import { SecureFetch } from "../../utils/api";

import {
    fetchUserPending,
    fetchUserSuccess,
    fetchUserError,
} from "./UserActions";

export const fetchUser = (token) => {
    return dispatch => {
        dispatch(fetchUserPending());

        SecureFetch("private", token)
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