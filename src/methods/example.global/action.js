class ExampleGlobalAction extends baseAction {
  async executeMethod() {
    /*
    GLOBAL CONSTANTS EXAMPLE
    
    Steps:
    1. Add "constant.FRAMEWORK_NAME = "NJS2" statement to global/constants.js file.
    2. By adding this, It's scope is global, i.e it will available throughout the project without importing or exporting it.
    3. To access it anywhere, you can use GLB.FRAMEWORK_NAME.
    */

    const framework_name = GLB.FRAMEWORK_NAME;
    this.setResponse("SUCCESS");
    return { framework_name };
  }
}
module.exports = ExampleGlobalAction;
