class ExampleHelloWorldAction extends baseAction {
  async executeMethod() {
    /*
    HELLO WORLD EXAMPLE

    Steps:
    1. To test this example, please start express server using following command:
        njs2 run express;
    2. Then open the browser and visit the following url:
      http://localhost:3000/example/helloWorld
    3. Ctrl+c to stop the server.
    (NOTE : Run the "njs2 run express" command before starting 'Steps' section in every example)
    */

    this.setResponse("SUCCESS");
    return "Hello World!..";
  }
}
module.exports = ExampleHelloWorldAction;
