class ExamplePostmanAction extends baseAction {
  async executeMethod() {
    let { x, y } = this;
    this.setResponse("SUCCESS");
    return `Arguments recieved. First Argument=${x}, Second Argument=${y}`;
  }
}
module.exports = ExamplePostmanAction;
