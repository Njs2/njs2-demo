class ExampleAuthenticationJwtSqlInitalize extends baseInitialize {
  constructor() {
    super();
    this.initializer = {};
    this.initializer.isSecured = true; // values: true/false
    this.initializer.requestMethod = ["GET"]; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {};

    return { ...param };
  }
}

module.exports = ExampleAuthenticationJwtSqlInitalize;
