class ExampleMongoUpdateUserDetailsAction extends baseAction {
  async executeMethod() {
    
    let { user_id, updated_user_name } = this;
    const [userLib] = AutoLoad.loadLibray("mongoLib", ["user"]);

    const result = await userLib.updateUser(
      { user_id: user_id }, // query
      { user_name: updated_user_name }, //Updated data
      { new: true } //Option to return updated data
    );

    if (!result) {
      this.setResponse("INVALID_USER");
      return {};
    }

    this.setResponse("SUCCESS");
    return { result };
  }
}
module.exports = ExampleMongoUpdateUserDetailsAction;
