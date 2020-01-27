export const FETCH_RESOURCES_PENDING = "FETCH_RESOURCES_PENDING";
export const FETCH_RESOURCES_SUCCESS = "FETCH_RESOURCES_SUCCESS";
export const FETCH_RESOURCES_ERROR = "FETCH_RESOURCES_ERROR";

export const CREATE_RESOURCE_PENDING = "CREATE_RESOURCE_PENDING";
export const CREATE_RESOURCE_SUCCESS = "CREATE_RESOURCE_SUCCESS";
export const CREATE_RESOURCE_ERROR = "CREATE_RESOURCE_ERROR";
export const CREATE_RESOURCE_RESET = "CREATE_RESOURCE_RESET";

/**
 * Fetch resouces
 */
export const fetchResourcesPending = () => {
    return {
        type: FETCH_RESOURCES_PENDING
    }
}

export const fetchResourcesSuccess = (payload) => {
    return {
        type: FETCH_RESOURCES_SUCCESS,
        payload,
    }
}

export const fetchResourcesError = (error) => {
    return {
        type: FETCH_RESOURCES_ERROR,
        error,
    }
}

/**
 * Create resource
 */
export const createResourcePending = () => {
    return {
        type: CREATE_RESOURCE_PENDING
    }
}

export const createResourceSuccess = (payload) => {
    return {
        type: CREATE_RESOURCE_SUCCESS,
        payload,
    }
}

export const createResourceError = (payload) => {
    return {
        type: CREATE_RESOURCE_ERROR,
        payload,
    }
}

export const createResourceReset = () => {
    return {
        type: CREATE_RESOURCE_RESET
    }
}
