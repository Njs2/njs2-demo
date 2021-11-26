class ExampleRedisDeleteAction extends baseAction {
  async executeMethod() {
    /*
    REDIS DELETE DATA EXAMPLE

    Description:
    - This example shows how to delete data from redis.

    Steps:
    1. Select example/redisDelete in postman under "demo-project" collection.
    2. Pass the user_id as an argument.
    */

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
