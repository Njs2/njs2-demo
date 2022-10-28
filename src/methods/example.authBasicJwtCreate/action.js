const jwt = require("jsonwebtoken");
class ExampleAuthBasicJwtCreateAction extends baseAction {
  async executeMethod() {
    let { user_id } = this;
    let access_token = jwt.sign({ user_id }, "my_secret_key");
    this.setResponse("SUCCESS");
    return { access_token };
  }
}
module.exports = ExampleAuthBasicJwtCreateAction;
