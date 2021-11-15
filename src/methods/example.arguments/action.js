class ExampleArgumentsAction extends baseAction {
  async executeMethod() {
    /*
    ARGUMENTS HANDLING EXAMPLE

    Prerequisites:
    1. In init.js file create an argument by specifying its name,type,description,whether it is required or not and default value for it.
    2. This example expects two arguments, Go to init.js file to understand arguments setup for this action.

    Steps
    1. Goto browser and enter http://localhost:3000/example/arguments?x=10&y=hello
    2. So basically this action takes arguments x and y as argument1 and argument2 respectively. 
    Then returns the reponse as below.
        Arguments recieved. First Argument=10, Second Argument=hello
    
    */

    let { argument1, argument2 } = this;

    this.setResponse("SUCCESS");
    return `Arguments recieved. First Argument=${argument1}, Second Argument=${argument2}`;
  }
}
module.exports = ExampleArgumentsAction;
