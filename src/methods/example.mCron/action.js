
class ExampleMCronAction extends baseAction {

  async executeMethod() {
    let { inpVals } = this;
    this.setResponse('SUCCESS');
    return {};
  };

}
module.exports = ExampleMCronAction;
