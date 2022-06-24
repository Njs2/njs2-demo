class ExamplePostmanInitalize extends baseInitialize {
  constructor() {
    super();
    this.initializer = {};
    this.initializer.isSecured = false; // values: true/false
    this.initializer.requestMethod = ["GET"]; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      x: {
        name: "x",
        type: "number",
        description: "First argument",
        required: false,
        default: "10", 
      },
      y: {
        name: "y",
        type: "string",
        description: "Second argument",
        required: true, 
        default: "hai",
      },
    };

    return { ...param };
  }
}

module.exports = ExamplePostmanInitalize;
