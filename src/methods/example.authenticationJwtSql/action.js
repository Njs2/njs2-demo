class ExampleAuthenticationJwtSqlAction extends baseAction {
  async executeMethod() {

    let { userObj } = this;

    this.setResponse("SUCCESS");
    return { userObj };
  }
}
module.exports = ExampleAuthenticationJwtSqlAction;
