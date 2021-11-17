const AWS = require("aws-sdk");
const s3 = new AWS.S3();
class ExampleFileHandlingS3Action extends baseAction {
  async executeMethod() {
    let { fileObject } = this;

    let BucketName = "njs2-sample-4b418112-d015-4200-9f82-d6ed3ad9470b";
    let content = fileObject.content;

    //create s3 bucket
    try {
      await s3
        .createBucket({
          Bucket: BucketName,
        })
        .promise();
    } catch (e) {}

    //To upload file to s3 bucket
    await s3
      .putObject({
        Bucket: BucketName,
        Key: fileObject.filename,
        Body: content,
      })
      .promise();

    
    //To get url of uploaded file
    var s3url = s3.getSignedUrl("getObject", {
      Bucket: BucketName,
      Key: fileObject.filename,
    });

    this.setResponse("SUCCESS");
    return {
      file_uploaded_url: s3url,
    };
  }
}
module.exports = ExampleFileHandlingS3Action;
