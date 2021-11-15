class ExamplePostmanInitalize extends baseInitialize {
  constructor() {
    super();
    this.pkgInitializer = {};
    this.pkgInitializer.isSecured = false; // values: true/false
    this.pkgInitializer.requestMethod = ["GET"]; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
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
