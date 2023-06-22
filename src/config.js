const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-1",
        BUCKET: "anchal-notes-uploads",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://sjms08fhj8.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_4gMgrC9DN",
        APP_CLIENT_ID: "1rbtlb160mue8bkpoud8udgli7",
        IDENTITY_POOL_ID: "us-east-1:23edfaaa-899d-4a34-984a-544bf79dcb86",
    },
};
export default config;