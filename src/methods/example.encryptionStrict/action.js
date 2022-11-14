class ExampleEncryptionStrictAction extends baseAction {
  async executeMethod() {
    let { name } = this;
    this.setResponse("SUCCESS");
    return `Hai ${name}, welcome to Njs2 Demo project (Strict Encryption)`;
  }
}
module.exports = ExampleEncryptionStrictAction;
