
class ExampleDecryptDataInitalize extends baseInitialize {

  constructor() {
    super();
    this.pkgInitializer =  {};
    this.pkgInitializer.isSecured = false; // values: true/false
    this.pkgInitializer.requestMethod = ['GET']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
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