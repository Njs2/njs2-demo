class ExampleAuthBasicJwtAction extends baseAction {
  async executeMethod() {

    let { userObj } = this;

    this.setResponse("SUCCESS");
    return { user_id: userObj.user_id };
  }
}
module.exports = ExampleAuthBasicJwtAction;
