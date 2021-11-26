class ExampleCustomRoutesAction extends baseAction {
  async executeMethod() {
    /*
    CUSTOM ROUTE EXAMPLE

    Description:
    -This example explains how to assign a custom route for a given method or API.

    Steps:
    1. Update below content in config/routes.json.
        [
          {
            "path": "customRoute",
            "methodName": "example/customRoutes"
          },
          {
            "path": "example/testRoute",
            "methodName": "example/customRoutes"
          }
        ]
    2. routes.json has array of objects. Each object has two properties.
        -path: path of the custom route.
        -methodName: name of the action.
    3. So if client send request to /customRoute, that will internally redirect to example/customRoutes.
    4. execute below paths to understand the working of custom routes. All these requests will be redirected to example/customRoutes.
          http://localhost:3000/example/customRoutes
          http://localhost:3000/example/testRoute
          http://localhost:3000/customRoute
    */

    this.setResponse("SUCCESS");
    return "CUSTOM ROUTE MESSAGE";
  }
}
module.exports = ExampleCustomRoutesAction;
