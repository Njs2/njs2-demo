class ExampleSqlReadUserAction extends baseAction {
  async executeMethod() {

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
