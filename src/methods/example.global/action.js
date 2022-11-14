class ExampleGlobalAction extends baseAction {
  async executeMethod() {

    const framework_name = GLB.FRAMEWORK_NAME;
    this.setResponse("SUCCESS");
    return { framework_name };
  }
}
module.exports = ExampleGlobalAction;
