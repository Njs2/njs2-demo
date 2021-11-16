class ExampleSqlCreateUserAction extends baseAction {
  async executeMethod() {
    /*
    SQL CREATE USER EXAMPLE

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
    2. Pass following arguments from Postman under body section:
      * user_id
      * user_name
      * gender
    3. After getting response, check your database.

    */

    const [userLib] = AutoLoad.loadLibray("sqlLib", ["user"]);
    let { user_id, user_name, gender } = this;

    let new_user = {
      user_id,
      user_name,
      gender,
    };

    await userLib.create(new_user);

    this.setResponse("SUCCESS");
    return { new_user };
  }
}
module.exports = ExampleSqlCreateUserAction;
