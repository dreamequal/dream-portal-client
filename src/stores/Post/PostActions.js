export const FETCH_POSTS_PENDING = "FETCH_POSTS_PENDING";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";

export const CREATE_POST_PENDING = "CREATE_POST_PENDING";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_ERROR = "CREATE_POST_ERROR";

/**
 * Fetch posts
 */
export const fetchPostsPending = () => {
    return {
        type: FETCH_POSTS_PENDING
    }
}

export const fetchPostsSuccess = (payload) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload,
    }
}

export const fetchPostsError = (error) => {
    return {
        type: FETCH_POSTS_ERROR,
        error,
    }
}

/**
 * Create post
 */
export const createPostPending = () => {
    return {
        type: CREATE_POST_PENDING
    }
}

export const createPostSuccess = (payload) => {
    return {
        type: CREATE_POST_SUCCESS,
        payload,
    }
}

export const createPostError = (error) => {
    return {
        type: CREATE_POST_ERROR,
        error,
    }
}