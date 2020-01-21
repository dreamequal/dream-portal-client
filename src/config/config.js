const dev = {
    s3: {
        BUCKET: "YOUR_DEV_S3_UPLOADS_BUCKET_NAME"
    },
    auth0: {
        DOMAIN: "groveapp.auth0.com",
        CLIENT_ID: "AmrhUtTUTWQ0Ifl3eKOW80v4V1xyGeVz",
        AUDIENCE: "http://localhost:9000"
    },
    apiGateway: {
        URL: "http://localhost:9000/api"
    },
};

const prod = {
    s3: {
        BUCKET: "YOUR_DEV_S3_UPLOADS_BUCKET_NAME"
    },
    auth0: {
        DOMAIN: "groveapp.auth0.com",
        CLIENT_ID: "AmrhUtTUTWQ0Ifl3eKOW80v4V1xyGeVz",
        AUDIENCE: "http://localhost:9000"
    },
    apiGateway: {
        URL: "http://localhost:9000/api"
    },
};

const config = process.env.REACT_APP_STAGE === "production" ? prod : dev;

export default {
    // Common config vars
    ...config
};