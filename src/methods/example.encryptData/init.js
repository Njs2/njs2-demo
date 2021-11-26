
class ExampleEncryptDataInitalize extends baseInitialize {

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
        "description": "data should be in string format",
        "required": true,
        "default": '{"name":"NJS2-user"}'
      },
    };

    return { ...param };
  }
}

module.exports = ExampleEncryptDataInitalize;