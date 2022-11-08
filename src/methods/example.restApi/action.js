
class ExampleRestApiAction extends baseAction {

  async executeMethod() {
    let { user_id } = this;
    this.setResponse('SUCCESS');
    return {user_id};
  };

}
module.exports = ExampleRestApiAction;
