class ExampleDecryptDataAction extends baseAction {
  async executeMethod() {
    let { data } = this;
    const [decryptLib] = AutoLoad.loadLibray("helperLib", ["decode"]);

    this.setResponse("SUCCESS");
    return {
      decryptedData: decryptLib.decryptText(data),
    };
  }
}
module.exports = ExampleDecryptDataAction;
