class ExampleGlobalAction extends baseAction {
  async executeMethod() {
    /*
    GLOBAL EXAMPLE

    Prerequisites:
    1. For create new global variable use global/constants.js file.
    2. For this example, create variable as follows:
        constant.FRAMEWORK_NAME = "NJS2";

    Steps:
    1. GLB holds the global variables which is defined in global/constants.js file.
    2. GLB.FRAMEWORK_NAME holds the value of FRAMEWORK_NAME which is defined in prerequisites.
    3. So this example will send "NJS2" in the response.
    */

    const framework_name = GLB.FRAMEWORK_NAME;
    this.setResponse("SUCCESS");
    return { framework_name };
  }
}
module.exports = ExampleGlobalAction;
