
class ExampleRedisDeleteInitalize extends baseInitialize {

  constructor() {
    super();
    this.pkgInitializer =  {};
    this.pkgInitializer.isSecured = false; // values: true/false
    this.pkgInitializer.requestMethod = ['DELETE']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      "user_id": {
        "name": "user_id",
        "type": "number",
        "description": "id for cache",
        "required": true,
        "default": "1"
      },
    };

    return { ...param };
  }
}

module.exports = ExampleRedisDeleteInitalize;