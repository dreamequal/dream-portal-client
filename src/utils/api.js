import config from "../config/config";

export const AuthFetch = (endpoint, options={}) =>
    fetch(`${config.apiGateway.URL}/auth/${endpoint}`, options);