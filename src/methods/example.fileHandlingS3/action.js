const AWS = require("aws-sdk");
const s3 = new AWS.S3();
class ExampleFileHandlingS3Action extends baseAction {
  async executeMethod() {
    let { fileObject, bucketName } = this;

    //To upload file to s3 bucket
    await s3
      .putObject({
        Bucket: bucketName,
        Key: fileObject.filename,
        Body: fileObject.content,
      })
      .promise();

    //To get url of uploaded file
    var s3url = s3.getSignedUrl("getObject", {
      Bucket: bucketName,
      Key: fileObject.filename,
    });

    this.setResponse("SUCCESS");
    return {
      file_uploaded_url: s3url,
    };
  }
}
module.exports = ExampleFileHandlingS3Action;
