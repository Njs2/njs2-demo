class ExampleRedisSetAction extends baseAction {
  async executeMethod() {
    /*
    REDIS SET DATA EXAMPLE

    Prerequisites:
    1. Make sure you have a redis server installed and running on your local machine.
    2. Install Njs2-Redis module using "npm install @njs2/redis" command
    3. If you want to use redis cloud service, make sure you have configured the credentials in config/config.json file.

    Steps:
    1. To understand userLib, Please refer to the library/redisLib/user.lib.js file.
    2. Run the project using "njs2 run" command.
    3. Select example/redisSet in postman under "demo-project" collection.
    4. Pass the user_id as an argument
    */

    let { user_id } = this;
    const [userLib] = AutoLoad.loadLibray("redisLib", ["user"]);

    const result = await userLib.setUserCache(user_id, {
      user_name: "test_user_" + user_id,
      user_id,
    });

    this.setResponse("SUCCESS");
    return { result };
  }
}
module.exports = ExampleRedisSetAction;
