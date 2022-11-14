## MONGO-DB CREATE USER EXAMPLE

### Description:
- This example demonstrates how to perform mongo database related operations. Then creates the user with user id and user name in the mongo database (i.e 'test').

### Steps:
1. MongoDB is installed and running on ```localhost:27017```
2. You have to install the ```njs2-mongo``` package. Inside the Njs2 Project do: ```npm install @njs2/mongo```
3. Update the below configuration in ```config/config.json``` as per your environment.
```json
"MONGO_DB_HOST": "localhost",
"MONGO_DB_NAME": "test",
"MONGO_DB_PORT": 27017,
"MONGO_DB_USER": "",
"MONGO_DB_PASSWORD": ""
```
4. Read the file ```library/mongoLib/model/user.js``` to see how to create a user schema, model and indexing\
*NOTE: you can use ```njs2 library mongoLib user mongo``` to create a user schema, model and indexing*
5. Read the file ```library/mongoLib/user.lib.js``` to create custom queries on user model.
6. AutoLoad the ```user.lib.js``` file.
7. As this is POST API, pass the parameter from the request body.
8. After getting response, check your mongodb database to see if the user is created.
