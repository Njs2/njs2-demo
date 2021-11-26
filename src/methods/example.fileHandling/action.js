const fs = require("fs");

class ExampleFileHandlingAction extends baseAction {
  async executeMethod() {
    /*
    FILE UPLOAD IN LOCAL EXAMPLE

    Description:
    -This example will store the file in Assets/Uploads folder.
    -File location will be sent in the response.

    Steps:
    1. In init.js, define a parameter as type: 'file', please check the init.js file.
    2. Import 'fs' module for file manipulation.
    3. In postman under body tab, under form-data section you can upload file.
    */

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
