import { ApiFetch } from "../../utils/api";

import {
    // Fetch
    fetchPostsPending,
    fetchPostsSuccess,
    fetchPostsError,
    // Create
    createPostPending,
    createPostSuccess,
    createPostError,
} from "./PostActions";

export const fetchPosts = (token) => {
    return dispatch => {
        dispatch(fetchPostsPending());

        ApiFetch("posts", {
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
                dispatch(fetchPostsSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchPostsError(error));
            })
    }
};

export const createPost = (token, post) => {
    return dispatch => {
        dispatch(createPostPending());

        ApiFetch("posts", {
            method: "POST",
            headers: {
                Authorization: `JWT ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ content: post }),
        })
            .then(res => res.json())
            .then(res => {
                if (res.message) {
                    throw(res.message);
                }
                dispatch(createPostSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(createPostError(error));
            })
    }
};