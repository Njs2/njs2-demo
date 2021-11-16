class userRedisLib {
  async setUserCache(userId, userData) {
    try{
        return await REDISManager.setKey("USER_" + userId, JSON.stringify(userData));
    }
    catch(err){
        console.log(err);
    }
  }

  async getUserCache(userId) {
    try {
      let user = await REDISManager.getKey("USER_" + userId);
      return user;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteUserCache(userId) {
    try {
      return await REDISManager.deleteKey("USER_" + userId);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = userRedisLib;
