import axios from "axios";
import config from "../config/config";

export const AuthFetch = (endpoint, options={}) =>
    axios({ url: `${config.apiGateway.URL}/auth/${endpoint}`, ...options });

export const ApiFetch = (endpoint, options={}) =>
    axios({ url: `${config.apiGateway.URL}/${endpoint}`, ...options });