## SQL CREATE USER EXAMPLE

### Description:
- This example shows how to create a user in the sql database.

### Steps:
1. Make sure that you have mysql installed on your machine. 
2. Install ```njs2-sql``` package using the command: ```npm i @njs2/sql```
3. Update the below configuration in ```config/config.json``` as per your environment
```json
"DATABASE_TYPE": "mysql",
"SQL_DB_HOST": "localhost",
"SQL_DB_NAME": "njs2-demo-database",
"SQL_DB_PORT": 3306,
"SQL_DB_USER": "root",
"SQL_DB_PASSWORD": "password"
```
4. Create a database named ```njs2-demo-database``` in your mysql.
5. In above database, create a table named 'user' with following query,
```javascript
CREATE TABLE `user` (
    `user_id` int(11) NOT NULL,
    `user_name` varchar(200) NOT NULL,
    `gender` varchar(200) NOT NULL,
    PRIMARY KEY (`user_id`)
)
```

6. To understand userLib, read ```sqlLib/user.lib.js```
*NOTE: you can use "njs2 library sqlLib user sql" to create "user.lib.js" file under "library/sqlLib" with 'sql' templates*

7. Pass following arguments from Postman under body section:
  * user_id
  * user_name
  * gender
8. After getting response, check your database for created user.
