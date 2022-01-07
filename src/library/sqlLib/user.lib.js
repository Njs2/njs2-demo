class userLib {
  async getUserDetails(user_id) {
    //returns one element from 'user' table whose user_id is 'user_id'
    return await SQLManager.findOne("user", { user_id: user_id });
  }

  async getUserList(query) {
    //returns list of users from 'user' table who is matched by 'query'
    return await SQLManager.find("user", query);
  }

  async updateUsers(query, updates) {
    //updates user with 'updates' in 'user' table who is matched by 'query'
    return await SQLManager.update("user", query, updates);
  }

  async create(userObj) {
    //creates a new user in 'user' table with 'userObj' data
    return await SQLManager.insert("user", userObj);
  }

  async deleteUser(user_id) {
    //delete the user from 'user' table whose user_id is 'user_id'
    return (
      await SQLManager.doExecuteRawQuery(
        `DELETE FROM user WHERE user_id = ${user_id}`
      )
    )[0];
  }
}

module.exports = userLib;
