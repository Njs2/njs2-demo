class ExampleSqlDeleteUserAction extends baseAction {
  async executeMethod() {
    /*
    SQL DELETE USER EXAMPLE

    Prerequisites:
    1. Make sure that you have mysql installed on your machine. 
    2. Install @njs2-sql package using npm (npm i @njs2/sql).
    3. Configuration to sql connection can be found in config/config.json file.
    4. Create a database named 'njs2-demo-database' in your mysql.
    5. In njs2-demo-database database, create a table named 'user' with following columns
        user_id (int)
        user_name (varchar)
        gender (varchar)
    SQL QUERY:  CREATE TABLE `user` (
                  `user_id` int(11) NOT NULL,
                  `user_name` varchar(200) NOT NULL,
                  `gender` varchar(200) NOT NULL,
                  PRIMARY KEY (`user_id`)

    Steps:
    1. To understand userLib, read sqlLib/user.lib.js
    2. Pass following arguments:
      * user_id
    3. After getting response, check your database.

    */

    const [userLib] = AutoLoad.loadLibray("sqlLib", ["user"]);
    let { user_id } = this;

    let deleted = await userLib.deleteUser(user_id);
    console.log(deleted);
    if (deleted.affectedRows > 0) {
      this.setResponse("SUCCESS");
      return `user id of deleted user is ${user_id}`;
    } else {
      this.setResponse("INVALID_USER");
      return {};
    }
  }
}
module.exports = ExampleSqlDeleteUserAction;
