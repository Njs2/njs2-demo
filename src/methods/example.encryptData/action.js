class ExampleEncryptDataAction extends baseAction {
  async executeMethod() {
    /*
    ENCRYPT DATA EXAMPLE

    Description:
    - This example encrypts data sent in request.

    Steps:
    1. Update the below configuration in the config.json file.
          "ENCRYPTION_KEY": "secret-key",
          "ENCRYPTION_IV": "secret-iv"
        (NOTE: The encryption key and iv can be changed to any string of your choice. This project uses the above configurations.)
    2. Go through the encode.lib.js helper method, created under the library/helperLib.
    3. You can use the same snippet for encrypt data in future.
    4. 'encode.lib.js' file loaded as encryptLib.
    5. The data sent by the user is encrypted using the encryptLib.encryptText() method.
    6. In postaman select example/encrypData API and pass the following data in params,
          data: {"name":"NJS2-user"}
    7. You will get the following response as encypted data:
          walCNiPvE5JAogazV25FgRTK5P%2FgCI%2BdNJKo2QxySrI%3D
    */

    const [encryptLib] = AutoLoad.loadLibray("helperLib", ["encode"]);

    let { data } = this;
    const encryptedData = encryptLib.encryptText(data);

    this.setResponse("SUCCESS");
    return { encryptedData };
  }
}
module.exports = ExampleEncryptDataAction;
