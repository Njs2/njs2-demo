class ExampleSqlUpdateUserAction extends baseAction {
  async executeMethod() {
    /*
    SQL UPDATE USER EXAMPLE

    Description:
    - This example shows how to update a user in the sql database.

    Steps:
    1. Pass following arguments in params or request body:
      * user_id
      * user_name (for update)
      * gender (for update)
    2. After getting response, check your database.

    */

    const [userLib] = AutoLoad.loadLibray("sqlLib", ["user"]);
    let { user_name, gender, user_id } = this;

    let user = await userLib.getUserDetails(user_id);

    let updateDetails = {
      user_name,
      gender,
    };

    if (user) {
      await userLib.updateUsers(user_id, updateDetails);
      this.setResponse("SUCCESS");
      return { updateDetails };
    } else {
      this.setResponse("INVALID_USER");
      return {};
    }
  }
}
module.exports = ExampleSqlUpdateUserAction;
