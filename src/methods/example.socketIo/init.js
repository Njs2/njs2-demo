
class ExampleSocketIoInitalize extends baseInitialize {

  constructor() {
    super();
    this.pkgInitializer =  {};
    this.pkgInitializer.isSecured = false; // values: true/false
    this.pkgInitializer.requestMethod = ['GET']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      "inpVals": {
        "name": "inp_vals",
        "type": "string",
        "description": "inp_vals",
        "required": false,
        "default": ""
      },
    };

    return { ...param };
  }
}

module.exports = ExampleSocketIoInitalize;