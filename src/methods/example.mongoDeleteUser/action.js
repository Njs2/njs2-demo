class ExampleMongoDeleteUserAction extends baseAction {
  async executeMethod() {
    /*
    MONGO-DB DELETE USER EXAMPLE

    Description:
    - This example shows how to delete a user from the database.

    Steps:
    1. Pass the user_id params of the user you want to delete.
    2. After getting response, check your mongodb database to see if the user is deleted.
    */

    let { user_id } = this;

    const [userLib] = AutoLoad.loadLibray("mongoLib", ["user"]);

    const result = await userLib.deleteUser({ user_id });

    if (!result) {
      this.setResponse("INVALID_USER");
      return {};
    }

    this.setResponse("SUCCESS");
    return { result };
  }
}
module.exports = ExampleMongoDeleteUserAction;
