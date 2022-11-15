
class ExampleEslintAction extends baseAction {

  async executeMethod() {
     // This line will cause mulitple eslint warnings
     // You can see this when you run njs2 run serverless or njs2 run express from terminal
     // some of the notable mentions are: 
     // no-unused-vars, prefer-const, semi, indent
     let { inpVals } = this
    
     this.setResponse('SUCCESS');
     return {};
  };

}
module.exports = ExampleEslintAction;