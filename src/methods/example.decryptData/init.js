
class ExampleDecryptDataInitalize extends baseInitialize {

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
        "description": "data",
        "required": true,
        "default": "walCNiPvE5JAogazV25FgRTK5P%2FgCI%2BdNJKo2QxySrI%3D"
      },
    };

    return { ...param };
  }
}

module.exports = ExampleDecryptDataInitalize;