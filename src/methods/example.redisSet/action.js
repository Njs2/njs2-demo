class ExampleRedisSetAction extends baseAction {
  async executeMethod() {
    
    let { user_id } = this;

    const result = await REDISManager.setKey(
      user_id,
      "test data to store in redis"
    );

    this.setResponse("SUCCESS");
    return { result };
  }
}
module.exports = ExampleRedisSetAction;
