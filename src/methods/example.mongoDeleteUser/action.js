class ExampleMongoDeleteUserAction extends baseAction {
  async executeMethod() {
    /*
    MONGO-DB DELETE USER EXAMPLE

    Prerequisites:
    1. MongoDB is installed and running on localhost:27017
    2. You have to install the njs2-mongo-driver package (npm install @njs2/mongodb)
    3. If you are using mongodb cloud services such as Atlas, You have to configure credentials in config/config.json

    Steps:
    1. Read the file library/mongoLib/model/user.js to see how to create a user schema, model and indexing.
    2. Read the file library/mongoLib/user.lib.js to create custom queries on user model.
    3. Run the project from the command line: njs2 run express;
    4. After importing collection in postman, go to: example/mongoDeleteUser.
    5. Couse this is POST API, pass the parameter from the request body.
    6. After getting response, check your mongodb database to see if the user is deleted.
    */

    let { user_id } = this;

    const [userLib] = AutoLoad.loadLibray("mongoLib", ["user"]);

    const result = await userLib.deleteUser({ user_id });

    if (!result) {
      this.setResponse("INVALID_USER");
      return {};
    }

    this.setResponse("SUCCESS");
    return { result };
  }
}
module.exports = ExampleMongoDeleteUserAction;
