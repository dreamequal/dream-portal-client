const dev = {
    auth: {
        tokenStorageKey: "SOME_TOKEN",
    },
    apiGateway: {
        URL: "http://localhost:8080/api"
    },
};

const prod = {
    auth: {
        tokenStorageKey: "SOME_TOKEN",
    },
    apiGateway: {
        URL: "http://localhost:8080/api"
    },
};

const config = process.env.REACT_APP_STAGE === "production" ? prod : dev;

export default {
    // Common config vars
    ...config
};