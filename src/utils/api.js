import config from "../config/config";

export const AuthFetch = (endpoint, options={}) =>
    fetch(`${config.apiGateway.URL}/auth/${endpoint}`, options);

export const ApiFetch = (endpoint, options={}) =>
    fetch(`${config.apiGateway.URL}/${endpoint}`, options);