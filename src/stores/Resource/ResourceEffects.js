import { ApiFetch } from "../../utils/api";

import {
    // Fetch
    fetchResourcesPending,
    fetchResourcesSuccess,
    fetchResourcesError,
    // Create
    createResourcePending,
    createResourceSuccess,
    createResourceError,
    createResourceReset,
} from "./ResourceActions";

export const fetchResources = (token, limit) => {
    return dispatch => {
        dispatch(fetchResourcesPending());

        ApiFetch("resources", {
            method: "GET",
            headers: {
                Authorization: `JWT ${token}`,
            },
            params: {
                limit,
            },
        })
            .then(res => res.data)
            .then(res => {
                if (res.error) {
                    throw(res.error);
                }
                dispatch(fetchResourcesSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchResourcesError(error));
            })
    }
};

export const createResource = (token, resourceData, file) => {
    return dispatch => {
        dispatch(createResourcePending());

        const formData = new FormData();
        for (const field in resourceData) {
            formData.append(field, resourceData[field]);
        }
        formData.append("resource", file);

        ApiFetch("resources", {
            method: "POST",
            headers: {
                Authorization: `JWT ${token}`,
                "Content-Type": "multipart/form-data",
            },
            data: formData,
        })
            .then(res => res.data)
            .then(res => {
                if (res.errors) {
                    throw(res.errors);
                }
                dispatch(createResourceSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(createResourceError(error.response.data.message));
            })
    }
};

export const resetCreateResource = (token, resourceData, file) => {
    return dispatch => {
        dispatch(createResourceReset());
    }
};