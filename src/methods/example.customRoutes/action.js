class ExampleCustomRoutesAction extends baseAction {
  async executeMethod() {
    this.setResponse("SUCCESS");
    return "CUSTOM ROUTE MESSAGE";
  }
}
module.exports = ExampleCustomRoutesAction;
