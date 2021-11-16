class ExampleAutoLoadAction extends baseAction {
  async executeMethod() {
    /*
    AUTOLOAD EXAMPLE

    Prerequisites:
    1. In src/library/helper folder test.lib.js file created.
    2. Follow the same naming conventions as <FILE_NAME>.lib.js
    3. In the test file, testFunction is created which returns string "testFunction in helper".
    4. Please read the src/library/helper/test.lib.js file for more details.

    Steps:
    1. This example shows how to load the helper file test.lib.js in this file in the name of testLib.
    2. testLib.testFunction() is syntax used for calling testFunction.
    3. Run this API and see the result.
    */

    //To load Sql Library - AutoLoad.loadLibray("sqlLib",["<FILE_NAME>"]) (NOTE: <FILE_NAME> is the name of the file without .lib.js)
    //To load Mongo Library - AutoLoad.loadLibray("mongoLib",["<FILE_NAME>"]) (NOTE: <FILE_NAME> is the name of the file without .lib.js)
    //To load Redis Library - AutoLoad.loadLibray("redisLib",["<FILE_NAME>"]) (NOTE: <FILE_NAME> is the name of the file without .lib.js)

    const [testLib] = AutoLoad.loadLibray("helperLib", ["test"]);

    const result = await testLib.testFunction();

    this.setResponse("SUCCESS");
    return { result };
  }
}
module.exports = ExampleAutoLoadAction;
