const fs = require("fs");

class ExampleFileHandlingAction extends baseAction {
  async executeMethod() {
  
    let { fileObject } = this;

    const path = process.cwd() + "/Assets/Uploads/" + fileObject.filename;
    const content = fileObject.content;

    fs.writeFileSync(path, content, (error) => {
      if (error) console.log("error in createion of file ", error.message);
    });

    this.setResponse("SUCCESS");
    return {
      file_uploaded_url: path,
    };
  }
}
module.exports = ExampleFileHandlingAction;
