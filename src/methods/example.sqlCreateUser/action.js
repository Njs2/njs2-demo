class ExampleSqlCreateUserAction extends baseAction {
  async executeMethod() {
    
    const [userLib] = AutoLoad.loadLibray("sqlLib", ["user"]);
    let { user_id, user_name, gender } = this;

    let new_user = {
      user_id,
      user_name,
      gender,
    };

    await userLib.create(new_user);

    this.setResponse("SUCCESS");
    return { new_user };
  }
}
module.exports = ExampleSqlCreateUserAction;
