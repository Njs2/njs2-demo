class ExampleLocalizationAction extends baseAction {
  async executeMethod() {
    this.setResponse("CUSTOM_RESPONSE");
    return {};
  }
}
module.exports = ExampleLocalizationAction;
