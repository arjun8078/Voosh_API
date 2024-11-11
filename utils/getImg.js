const s3 = require('../utils/aws');

const generatePresignedUrl = async (bucketName, key, expiration) => {
    const params = {
      Bucket: bucketName,
      Key: key,
      Expires: expiration
    };
  
    try {
      const url = await s3.getSignedUrlPromise('getObject', params);
      return url;
    } catch (err) {
      console.error('Error generating pre-signed URL:', err);
      return null;
    }
  };

  const deleteImage = async (bucketName, key) => {
    const params = {
      Bucket: bucketName,
      Key: key
    };
  
    try {
      const data = await s3.deleteObject(params).promise();
      console.log('Object deleted from S3:', data);
      return true;
    } catch (err) {
      console.error('Error deleting object from S3:', err);
      return false;
    }
  };

  module.exports = { generatePresignedUrl, deleteImage };