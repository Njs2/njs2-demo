class ExampleAutoLoadAction extends baseAction {
  async executeMethod() {
   
    const [testLib] = AutoLoad.loadLibray("helperLib", ["test"]);

    const result = await testLib.testFunction();

    this.setResponse("SUCCESS");
    return { result };
  }
}
module.exports = ExampleAutoLoadAction;
