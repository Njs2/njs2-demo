
class ExampleRestApiAction extends baseAction {

  async executeMethod() {
    /*
    REST API EXAMPLE

    Description:
    - This example shows how to define a rest api.
    - By default in init.js, Method is set to GET method. So it works with GET method.

    Steps:
    In init.js set the following:
    1. To create GET request, set this.initializer.requestMethod = ["GET"]
    2. To create POST request, set this.initializer.requestMethod = ["POST"]
    3. To create PUT request, set this.initializer.requestMethod = ["PUT"]
    4. To create DELETE request, set this.initializer.requestMethod = ["DELETE"]
    5. To support multiple request methods, set this.initializer.requestMethod = ["GET", "POST", "PUT", "DELETE"]
    */
    let { user_id } = this;

    this.setResponse('SUCCESS');
    return {user_id};
  };

}
module.exports = ExampleRestApiAction;