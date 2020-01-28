const dev = {
    auth: {
        tokenStorageKey: process.env.REACT_APP_TOKEN_STORAGE_KEY || "auth-token",
    },
    apiGateway: {
        URL: process.env.REACT_APP_API_GATEWAY || "http://localhost:8080/api"
    },
};

const prod = {
    auth: {
        tokenStorageKey: process.env.REACT_APP_TOKEN_STORAGE_KEY || "auth-token",
    },
    apiGateway: {
        URL: process.env.REACT_APP_API_GATEWAY || "http://localhost:8080/api"
    },
};

const config = process.env.REACT_APP_STAGE === "production" ? prod : dev;

export default {
    // Common config vars
    ...config
};