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

export const fetchPosts = (token, page, perPage) => {
    return dispatch => {
        dispatch(fetchPostsPending());

        ApiFetch("posts", {
            method: "GET",
            headers: {
                Authorization: `JWT ${token}`,
            },
            params: {
                page,
                perPage,
            },
        })
            .then(res => res.data)
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
            data: { content: post },
        })
            .then(res => res.data)
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