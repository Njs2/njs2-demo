
class ExampleSqlTransactionQueryInitalize extends baseInitialize {

  constructor() {
    super();
    this.pkgInitializer =  {};
    this.pkgInitializer.isSecured = false; // values: true/false
    this.pkgInitializer.requestMethod = ['GET']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      "userId": {
        "name": "user_id",
        "type": "number",
        "description": "user_id",
        "required": false,
        "default": ""
      },
      "status": {
        "name": "status",
        "type": "number",
        "description": "user_id",
        "required": false,
        "default": ""
      }
    };

    return { ...param };
  }
}

module.exports = ExampleSqlTransactionQueryInitalize;