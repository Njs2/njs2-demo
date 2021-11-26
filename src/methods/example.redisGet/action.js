class ExampleRedisGetAction extends baseAction {
  async executeMethod() {
    /*
    REDIS GET/READ DATA EXAMPLE

    Description:
    - This example shows how to read/get data from redis.

    Steps:
    1. Select example/redisGet in postman under "demo-project" collection.
    2. Pass the user_id as an argument
    */

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
