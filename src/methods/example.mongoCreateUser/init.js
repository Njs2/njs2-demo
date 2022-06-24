
class ExampleMongoCreateUserInitalize extends baseInitialize {

  constructor() {
    super();
    this.initializer =  {};
    this.initializer.isSecured = false; // values: true/false
    this.initializer.requestMethod = ['POST']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      "user_id": {
        "name": "user_id",
        "type": "number",
        "description": "user id",
        "required": true,
        "default": "1"
      },
      "user_name": {
        "name": "user_name",
        "type": "string",
        "description": "user name",
        "required": true,
        "default": "user123"
      },
    };

    return { ...param };
  }
}

module.exports = ExampleMongoCreateUserInitalize;