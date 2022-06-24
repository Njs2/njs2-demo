const serverless = require('./serverless');
const init = require('./src/library/roomHandler/init');
const websockets = require('./websockets');

module.exports.handler = async (event) => {
  console.log("event ",event);
  try {
    const requestType = event.stageVariables.requestType;
    if (requestType === 'API') {
      return await serverless.execute(event);
    } else if (requestType === 'Socket') {
      let result = {};
      switch (event.requestContext.eventType) {
        case "CONNECT":
          result = await websockets.connectHandler(event);
          break;

        case "DISCONNECT":
          result = await websockets.disconnectHandler(event);
          break;

        case "MESSAGE":
          result = await websockets.socketsHandler(event);
          break;
      }
      return result;
    } else if (requestType === 'processRoom') {
      return await init(event.content);
    } else if (requestType === 'scheduler') {
      // const {SCEDULER} = require("./src/config/config.json");
      // const packageName = event.stageVariables.packageName;
      // const taskName = event.stageVariables.taskName;
      // const cronDetails = SCEDULER[packageName];
      // require the file by taskName
      await require(`./src/tasks/${taskName}.task.js`).handler();
    }
  } catch (error) {
    console.error(error);
  }
};