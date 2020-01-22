const dev = {
    s3: {
        BUCKET: "YOUR_DEV_S3_UPLOADS_BUCKET_NAME"
    },
    auth: {
        DOMAIN: "",
        CLIENT_ID: "",
    },
    apiGateway: {
        URL: "http://localhost:9000/api"
    },
};

const prod = {
    s3: {
        BUCKET: "YOUR_DEV_S3_UPLOADS_BUCKET_NAME"
    },
    auth: {
        DOMAIN: "",
        CLIENT_ID: "",
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