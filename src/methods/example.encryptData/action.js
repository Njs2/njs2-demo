class ExampleEncryptDataAction extends baseAction {
  async executeMethod() {

    const [encryptLib] = AutoLoad.loadLibray("helperLib", ["encode"]);

    let { data } = this;
    const encryptedData = encryptLib.encryptText(data);

    this.setResponse("SUCCESS");
    return { encryptedData };
  }
}
module.exports = ExampleEncryptDataAction;
