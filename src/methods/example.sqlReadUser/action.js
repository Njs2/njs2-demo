class ExampleSqlReadUserAction extends baseAction {
  async executeMethod() {
    /*
    SQL READ/GET USER EXAMPLE

    Description:
    - This example shows how to read/get a user in the sql database.

    Steps:
    1. Pass the following arguments:
      * user_id
    2. User with user_id will be returned.

    */

    const [userLib] = AutoLoad.loadLibray("sqlLib", ["user"]);
    let { user_id } = this;

    let user = await userLib.getUserDetails(user_id);

    if (user) {
      this.setResponse("SUCCESS");
      return { user };
    } else {
      this.setResponse("INVALID_USER");
      return {};
    }
  }
}
module.exports = ExampleSqlReadUserAction;
