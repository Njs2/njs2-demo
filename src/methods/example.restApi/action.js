
class ExampleRestApiAction extends baseAction {

  async executeMethod() {
    /*
    REST API EXAMPLE

    Prerequisites:
    In init.js set the following:
    1. To create GET request, set this.pkgInitializer.requestMethod = ["GET"]
    2. To create POST request, set this.pkgInitializer.requestMethod = ["POST"]
    3. To create PUT request, set this.pkgInitializer.requestMethod = ["PUT"]
    4. To create DELETE request, set this.pkgInitializer.requestMethod = ["DELETE"]
    5. To support multiple request methods, set this.pkgInitializer.requestMethod = ["GET", "POST", "PUT", "DELETE"]
    */
    let { user_id } = this;

    this.setResponse('SUCCESS');
    return {user_id};
  };

}
module.exports = ExampleRestApiAction;