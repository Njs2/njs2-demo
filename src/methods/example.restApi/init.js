
class ExampleRestApiInitalize extends baseInitialize {

  constructor() {
    super();
    this.initializer =  {};
    this.initializer.isSecured = false; // values: true/false
    this.initializer.requestMethod = ['GET']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      "user_id": {
        "name": "user_id",
        "type": "string",
        "description": "Example Id for user",
        "required": true,
        "default": "123"
      },
    };

    return { ...param };
  }
}

module.exports = ExampleRestApiInitalize;