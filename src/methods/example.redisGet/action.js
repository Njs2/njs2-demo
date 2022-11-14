class ExampleRedisGetAction extends baseAction {
  async executeMethod() {
    
    let { user_id } = this;
    let user;
    user = await REDISManager.getKey(user_id);
    if (!user) {
      this.setResponse("INVALID_USER");
      return {};
    }

    this.setResponse("SUCCESS");
    return user;
  }
}
module.exports = ExampleRedisGetAction;
