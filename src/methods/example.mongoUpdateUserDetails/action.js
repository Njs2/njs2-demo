class ExampleMongoUpdateUserDetailsAction extends baseAction {
  async executeMethod() {
    /*
    MONGO-DB UPDATE USER EXAMPLE

    Description:
    - This example shows how to update a user's name.

    Steps:
    1. In postman, go to: example/mongoUpdateUserDetails.
    2. Pass the following parameters:
      - user_id: The user's id.
      - updated_user_name: The new name.
    3. After getting response, check your mongodb database to see if the user is updated.
    */

    let { user_id, updated_user_name } = this;
    const [userLib] = AutoLoad.loadLibray("mongoLib", ["user"]);

    const result = await userLib.updateUser(
      { user_id: user_id }, // query
      { user_name: updated_user_name }, //Updated data
      { new: true } //Option to return updated data
    );

    if (!result) {
      this.setResponse("INVALID_USER");
      return {};
    }

    this.setResponse("SUCCESS");
    return { result };
  }
}
module.exports = ExampleMongoUpdateUserDetailsAction;
