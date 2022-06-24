
class ExampleEncryptDataInitalize extends baseInitialize {

  constructor() {
    super();
    this.initializer =  {};
    this.initializer.isSecured = false; // values: true/false
    this.initializer.requestMethod = ['GET']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      "data": {
        "name": "data",
        "type": "string",
        "description": "data should be in string format",
        "required": true,
        "default": '{"name":"NJS2-user"}'
      },
    };

    return { ...param };
  }
}

module.exports = ExampleEncryptDataInitalize;