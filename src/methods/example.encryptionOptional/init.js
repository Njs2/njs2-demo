
class ExampleEncryptionOptionalInitalize extends baseInitialize {

  constructor() {
    super();
    this.pkgInitializer =  {};
    this.pkgInitializer.isSecured = false; // values: true/false
    this.pkgInitializer.requestMethod = ['GET']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      "name": {
        "name": "name",
        "type": "string",
        "description": "name of user sent in GET request from Client/Browser side",
        "required": true,
        "default": "unknown user"
      },
    };

    return { ...param };
  }
}

module.exports = ExampleEncryptionOptionalInitalize;