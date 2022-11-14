class ExampleSqlDeleteUserAction extends baseAction {
  async executeMethod() {
    
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
