class ExampleSqlDeleteUserAction extends baseAction {
  async executeMethod() {
    /*
    SQL DELETE USER EXAMPLE

    Description:
    - This example shows how to delete a user in the sql database.

    Steps:
    1. Pass following arguments:
      * user_id
    2. After getting response, check your database to see if user was deleted.

    */

    const [userLib] = AutoLoad.loadLibray("sqlLib", ["user"]);
    let { user_id } = this;

    let deleted = await userLib.deleteUser(user_id);
    console.log(deleted);
    if (deleted.affectedRows > 0) {
      this.setResponse("SUCCESS");
      return `user id of deleted user is ${user_id}`;
    } else {
      this.setResponse("INVALID_USER");
      return {};
    }
  }
}
module.exports = ExampleSqlDeleteUserAction;
