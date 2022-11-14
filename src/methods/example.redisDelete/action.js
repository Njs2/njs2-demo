class ExampleRedisDeleteAction extends baseAction {
  async executeMethod() {
    
    let { user_id } = this;
    const result = await REDISManager.deleteKey(user_id);

    if (!result) {
      this.setResponse("INVALID_USER");
      return {};
    }

    this.setResponse("SUCCESS");
    return { result };
  }
}
module.exports = ExampleRedisDeleteAction;
