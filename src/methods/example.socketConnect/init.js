
class ExampleSocketConnectInitalize extends baseInitialize {

  constructor() {
    super();
    this.initializer =  {};
    this.initializer.isSecured = false; // values: true/false
    this.initializer.requestMethod = ['GET']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      "socket_id": {
        "name": "socket_id",
        "type": "string",
        "description": "socketId",
        "required": true,
        "default": ""
      }
    };

    return { ...param };
  }
}

module.exports = ExampleSocketConnectInitalize;