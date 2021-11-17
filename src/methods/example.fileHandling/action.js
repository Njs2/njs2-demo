const fs = require("fs");

class ExampleFileHandlingAction extends baseAction {
  async executeMethod() {
    /*
    FILE HANDLING EXAMPLE

    Prerequisites:
    1. Make sure you have a file to upload.
    2. In init.js file type of argument should be 'file', please read the init.js file.

    Steps:
    1. In postman under body tab, under form-data section you can upload file.
    2. This example will create folder with name uploadedFiles at root folder.
    3. Then upload the file to that folder and send the file location as a response.
    */

    let { fileObject } = this;

    const createDir = async (dirPath) => {
      await fs.mkdir(dirPath, (error) => {
        if (error) console.log("error occured while creating directory");
        else console.log("directory created..");
      });
    };

    const createFile = async (path, content) => {
      await fs.writeFile(path, content, (error) => {
        if (error) console.log("error ", error);
        else {
          console.log("file created");
        }
      });
    };

    const path = process.cwd() + "/uploadedFiles/";
    const content = fileObject.content;

    await createDir(path);
    await createFile(path + fileObject.filename, content);

  

    this.setResponse("SUCCESS");
    return {
      file_uploaded_url: path + fileObject.filename,
    };
  }
}
module.exports = ExampleFileHandlingAction;
