
class ExampleFileHandlingS3Initalize extends baseInitialize {

  constructor() {
    super();
    this.pkgInitializer =  {};
    this.pkgInitializer.isSecured = false; // values: true/false
    this.pkgInitializer.requestMethod = ['GET']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      "fileObject": {
        "name": "document",
        "type": "file",
        "description": "file uploaded to s3 bucket",
        "required": true,
        "default": ""
      },
    };

    return { ...param };
  }
}

module.exports = ExampleFileHandlingS3Initalize;