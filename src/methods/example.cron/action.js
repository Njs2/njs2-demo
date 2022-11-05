const fs = require("fs");
class ExampleCronAction extends baseAction {
  async executeMethod() {
    this.setResponse("SUCCESS");
    return {};
  }
}
module.exports = ExampleCronAction;
