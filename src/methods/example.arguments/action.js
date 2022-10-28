class ExampleArgumentsAction extends baseAction {
  async executeMethod() {
    
    let { argument1, argument2 } = this;

    this.setResponse("SUCCESS");
    return `Arguments recieved. First Argument=${argument1}, Second Argument=${argument2}`;
  }
}
module.exports = ExampleArgumentsAction;
