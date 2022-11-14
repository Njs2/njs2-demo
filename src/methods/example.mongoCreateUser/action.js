class ExampleMongoCreateUserAction extends baseAction {
  async executeMethod() {
    let { user_id, user_name } = this;
    const [userLib] = AutoLoad.loadLibray("mongoLib", ["user"]);

    const result = await userLib.createUser({
      user_name: user_name,
      user_id: user_id,
    });

    this.setResponse("SUCCESS");
    return { result };
  }
}
module.exports = ExampleMongoCreateUserAction;
