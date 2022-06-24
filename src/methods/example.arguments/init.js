class ExampleArgumentsInitalize extends baseInitialize {
  constructor() {
    super();
    this.initializer = {};
    this.initializer.isSecured = false; // values: true/false
    this.initializer.requestMethod = ["GET"]; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      argument1: {
        name: "x", // expecting request parameter with the name 'x' from client side.
        type: "number", // options: "number", "string", "file"
        description: "First argument", //this is used for documentation purpose.
        required: false, // this specifies the request parameter is optional.
        default: "10", // if argument x is not passed, this value will be used
      },
      argument2: {
        name: "y",
        type: "string",
        description: "Second argument",
        required: true, // this specifies the request parameter is mandatory.
        default: "hai",
      },
    };

    return { ...param };
  }
}

module.exports = ExampleArgumentsInitalize;
