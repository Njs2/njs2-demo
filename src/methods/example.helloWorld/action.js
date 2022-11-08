class ExampleHelloWorldAction extends baseAction {
    async executeMethod() {
      this.setResponse("SUCCESS");
      return "Hello World!..";
    }
  }
  module.exports = ExampleHelloWorldAction;
