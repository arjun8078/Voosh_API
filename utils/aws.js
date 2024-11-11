const AWS = require('aws-sdk');
const { AWS_Access_Key, AWS_Secret_Key, Region } = require('../config/awsCred');

AWS.config.update({
    accessKeyId: AWS_Access_Key,
    secretAccessKey: AWS_Secret_Key,
    region: Region
});

const s3 = new AWS.S3();

module.exports = s3;
