class ExampleApiGatewayAction extends baseAction {
  async executeMethod() {
    this.setResponse("SUCCESS");
    return { ALL_USERS: GLB.SOCKET_ID_ARRAY };
  }
}
module.exports = ExampleApiGatewayAction;
