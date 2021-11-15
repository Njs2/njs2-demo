class ExamplePostmanAction extends baseAction {
  async executeMethod() {
    /*
    POSTMAN USAGE EXAMPLE

    Prerequisites:
    1. Download Postman in your machine.

    Steps:
    1. In Postman click on import -> select link tab -> paste http://localhost:3000/postman to import collection.
    2. Select demo-project from collection and click on example/postman API.
    3. Under the params section, add the following parameters:
      - x: 10
      - y: hello
    4. Hit send button.
    */

    let { x, y } = this;

    this.setResponse("SUCCESS");
    return `Arguments recieved. First Argument=${x}, Second Argument=${y}`;
  }
}
module.exports = ExamplePostmanAction;
