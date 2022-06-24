
class ExampleEncryptionOptionalInitalize extends baseInitialize {

  constructor() {
    super();
    this.initializer =  {};
    this.initializer.isSecured = false; // values: true/false
    this.initializer.requestMethod = ['GET']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
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