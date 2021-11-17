class ExampleAuthenticationJwtSqlAction extends baseAction {
  async executeMethod() {
    /*
    AUTHENTICATION USING JWT_SQL EXAMPLE

    Prerequisites:
    1. Before trying this, make sure that you have tried SQL-CURD examples.

    2. In njs2-demo-database, create a table named "jwt_users" with following columns:
        user_id: int(11) PRIMARY KEY,
        username: varchar(255),
        access_token: varchar(255)

      SQL:  CREATE TABLE `jwt_users` (
              `user_id` int(11) NOT NULL,
              `user_name` varchar(255) NOT NULL,
              `access_token` varchar(255) NOT NULL,
              PRIMARY KEY (`user_id`)
            )

    3. Add a user in the table with following details:
        user_id: 123,
        username: "user123",
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjMsImlhdCI6MTYzNjk3MDA5NH0.9vPo_qn_sn4byUSLxfNWAYLzONkNwkqpk0PHqKnAPnQ"

      SQL:  INSERT INTO `jwt_users` 
            (`user_id`, `user_name`, `access_token`)
            VALUES (
              123,
              'user123', 
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjMsImlhdCI6MTYzNjk3MDA5NH0.9vPo_qn_sn4byUSLxfNWAYLzONkNwkqpk0PHqKnAPnQ'
            )

    4. In config/config.json, set the following:
        "AUTH_MODE": "JWT_SQL"               (NOTE: JWT_SQL and JWT are the two modes available)   
        "JWT_SECRET": "my_secret_key",       (NOTE: This is secret key used for generate JWT Token)
        "JWT_ID_KEY": "user_id",             (NOTE: This is data/payload that was used while creating JWT Token)
        "DB_TABLE_NAME": "jwt_users"         (NOTE: Name of table which contains JWT_ID_KEY and DB_ACCESS_KEY)
        "DB_ID_KEY": "user_id",              (NOTE: Name of argument which return from JWT Token)   
        "DB_ACCESS_KEY": "access_token"      (NOTE: Name of argument which searches in DB_TABLE_NAME for access_token passed in request header)

    5. In init.js, set this.pkgInitializer.isSecured: true.

    Steps: 
    1. Pass the access_token in request header which is given in prerequisites.
    
    */

    //In Following example JWT_SQL decrypts the access_token and get user_id which is specified in JWT_ID_KEY (in config/config.json).
    //Then search for matching user_id and access_token in sql table which is specified in DB_TABLE_NAME.
    //Then it returns entire user details in userObj.

    let { userObj } = this;

    this.setResponse("SUCCESS");
    return { userObj };
  }
}
module.exports = ExampleAuthenticationJwtSqlAction;
