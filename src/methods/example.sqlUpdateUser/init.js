class ExampleSqlUpdateUserInitalize extends baseInitialize {
  constructor() {
    super();
    this.pkgInitializer = {};
    this.pkgInitializer.isSecured = false; // values: true/false
    this.pkgInitializer.requestMethod = ["PUT"]; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      user_id: {
        name: "user_id",
        type: "number",
        description: "user id",
        required: true,
        default: "1",
      },
      user_name: {
        name: "user_name",
        type: "string",
        description: "user name",
        required: true,
        default: "user123",
      },
      gender: {
        name: "gender",
        type: "string",
        description: "user gender",
        required: true,
        default: "male",
      },
    };

    return { ...param };
  }
}

module.exports = ExampleSqlUpdateUserInitalize;
