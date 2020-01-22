import config from "../config/config";

export const SecureFetch = (endpoint, token) =>
    fetch(`${config.apiGateway.URL}/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });