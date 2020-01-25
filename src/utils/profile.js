import config from "../config/config";

/**
 * Get first and last initials from a name
 */
export const getInitials = (firstName = "", lastName = "") => {
    return `${firstName.split("")[0]}${lastName.split("")[0]}`;
}

export const setToken = (token) => {
    localStorage.setItem(config.auth.tokenStorageKey, token);
}

export const getToken = () => {
    return localStorage.getItem(config.auth.tokenStorageKey);
}

export const deleteToken = () => {
    localStorage.removeItem(config.auth.tokenStorageKey);
}