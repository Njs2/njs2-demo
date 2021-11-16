let userModel;
const initUserModel = async () => {
  try {
    if (userModel) return userModel;

    let userStructure = {
      user_id: {
        type: Number,
      },
      user_name: {
        type: String,
      },
    };
    //To create schema
    let userScehma = await MONGOManager.createSchema(userStructure);
    //To create indexing
    await MONGOManager.createIndex(userScehma, { user_id: 1 }, "USERID");
    //To create model named user using user schema
    userModel = await MONGOManager.createModel("user", userScehma, "user");

    return userModel;
    
  } catch (err) {
    logger.error(err);
    return null;
  }
};

module.exports = {
  initUserModel,
};
