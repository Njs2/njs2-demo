class ExampleEncryptionStrictAction extends baseAction {
  async executeMethod() {
    /*
    ENCRYPTION STRICT MODE EXAMPLE

    Description:
    - This example shows how to use encryption in strict mode.
    - This example expects name and that to be encrypted.

    Steps:
    1. In config/config.json, set the following:
       "ENCRYPTION_MODE": "strict",
       "ENCRYPTION_KEY": "secret-key",
        "ENCRYPTION_IV": "secret-iv"
    2. Run command in terminal: njs2 run express;
    3. In postman under the header section, pass enc_state = 1  //To enable encryption mode.
    4. Pass the following argument under params:
          data = walCNiPvE5JAogazV25FgRTK5P%2FgCI%2BdNJKo2QxySrI%3D 
    5. You will get the following response:
          S7sBFm5KvNq+WSyorwmciKV03DxEEQpElG77I86w8NMNZP8JwhdsCmNnIRybztPZULgW790T8/xbCQibKVq6TQ==
    6. If you decrypt the above response, you will get the following:
          "Hai NJS2-user, welcome to Njs2 Demo project (Strict Encryption)"
    */

    let { name } = this;

    this.setResponse("SUCCESS");
    return `Hai ${name}, welcome to Njs2 Demo project (Strict Encryption)`;
  }
}
module.exports = ExampleEncryptionStrictAction;
