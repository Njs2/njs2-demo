class ExampleMongoGetUserDetailsAction extends baseAction {
  async executeMethod() {
    /*
    MONGO-DB READ/GET USER EXAMPLE

    Description:
    - This example shows how to read/get a user from the database.

    Steps:
    1. In postman, go to: example/mongoGetUserDetails.
    2. Pass the user_id as a parameter.
    */

    let { user_id } = this;
    const [userLib] = AutoLoad.loadLibray("mongoLib", ["user"]);

    const result = await userLib.getUser({ user_id });

    if (!result) {
      this.setResponse("INVALID_USER");
      return {};
    }
    this.setResponse("SUCCESS");
    return { result };
  }
}
module.exports = ExampleMongoGetUserDetailsAction;
