
class ExampleHelloWorldInitalize extends baseInitialize {

  constructor() {
    super();
    this.pkgInitializer = {};
    this.pkgInitializer.isSecured = false; // values: true/false
    this.pkgInitializer.requestMethod = ['GET']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {};

    return { ...param };
  }
}

module.exports = ExampleHelloWorldInitalize;