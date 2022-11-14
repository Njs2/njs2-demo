class ExampleEncryptionOptionalAction extends baseAction {
  async executeMethod() {

    let { name } = this;

    this.setResponse("SUCCESS");
    return `Hai ${name}, welcome to Njs2 Demo project (Optional Encryption)`;
  }
}
module.exports = ExampleEncryptionOptionalAction;
