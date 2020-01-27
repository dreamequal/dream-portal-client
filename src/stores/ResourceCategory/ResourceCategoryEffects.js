import { ApiFetch } from "../../utils/api";

import {
    // Fetch
    fetchCategoriesPending,
    fetchCategoriesSuccess,
    fetchCategoriesError,
    // Create
    createCategoryPending,
    createCategorySuccess,
    createCategoryError,
} from "./ResourceCategoryActions";

export const fetchCategories = (token) => {
    return dispatch => {
        dispatch(fetchCategoriesPending());

        ApiFetch("resources/categories", {
            method: "GET",
            headers: {
                Authorization: `JWT ${token}`,
            },
        })
            .then(res => res.data)
            .then(res => {
                if (res.error) {
                    throw(res.error);
                }
                dispatch(fetchCategoriesSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchCategoriesError(error));
            })
    }
};

export const createCategory = (token, category) => {
    return dispatch => {
        dispatch(createCategoryPending());

        ApiFetch("posts", {
            method: "POST",
            headers: {
                Authorization: `JWT ${token}`,
                "Content-Type": "application/json"
            },
            data: category,
        })
            .then(res => res.data)
            .then(res => {
                if (res.message) {
                    throw(res.message);
                }
                dispatch(createCategorySuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(createCategoryError(error));
            })
    }
};