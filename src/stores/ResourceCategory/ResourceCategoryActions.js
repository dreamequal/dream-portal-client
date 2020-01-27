export const FETCH_CATEGORIES_PENDING = "FETCH_CATEGORIES_PENDING";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR";

export const CREATE_CATEGORY_PENDING = "CREATE_CATEGORY_PENDING";
export const CREATE_CATEGORY_SUCCESS = "CREATE_CATEGORY_SUCCESS";
export const CREATE_CATEGORY_ERROR = "CREATE_CATEGORY_ERROR";

/**
 * Fetch catagories
 */
export const fetchCategoriesPending = () => {
    return {
        type: FETCH_CATEGORIES_PENDING
    }
}

export const fetchCategoriesSuccess = (payload) => {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        payload,
    }
}

export const fetchCategoriesError = (error) => {
    return {
        type: FETCH_CATEGORIES_ERROR,
        error,
    }
}

/**
 * Create category
 */
export const createCategoryPending = () => {
    return {
        type: CREATE_CATEGORY_PENDING
    }
}

export const createCategorySuccess = (payload) => {
    return {
        type: CREATE_CATEGORY_SUCCESS,
        payload,
    }
}

export const createCategoryError = (error) => {
    return {
        type: CREATE_CATEGORY_ERROR,
        error,
    }
}