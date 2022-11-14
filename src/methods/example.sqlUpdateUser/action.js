class ExampleSqlUpdateUserAction extends baseAction {
  async executeMethod() {
    
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
