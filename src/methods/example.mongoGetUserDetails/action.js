class ExampleMongoGetUserDetailsAction extends baseAction {
  async executeMethod() {
    
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
