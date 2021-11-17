class ExampleSocketApiGatewayAction extends baseAction {
  async executeMethod() {
    /*
    SOCKET API GATEWAY EXAMPLE
    
    Prerequisites:
    1. In config.json, set the following:
        "SOCKET_SYSTEM_TYPE": "API_GATEWAY"

    2. Make sure you have Latest Postman which supports websockets ( Postman v8.5 and above)    

    3. Set the API to trigger when the socket is connected in global/constants.js as follows:
          constant.CONNECTION_HANDLER_METHOD = "example/socketConnect";  //this will trigger while conection is established
          constant.DISCONNECTION_HANDLER_METHOD = "example/socketDisconnect";  //this will trigger while conection is disconnected
          (NOTE: Please read  example/socketConnect.js and example/socketDisconnect.js files for more details)

    4. In websockets.js, under "CONNECT" case (switch case) set the following:
            wsEvent.queryStringParameters = { socket_id: event.requestContext.connectionId };
            //passing connection id as socket_id to socketConnect method.

    5. In websockets.js, under "DISCONNECT" case (switch case) set the following:
            wsEvent.queryStringParameters = { socket_id: event.requestContext.connectionId };
            //passing connection id as socket_id to socketDisconnect method.

    6. In global/constants.js, define the following:
            constant.SOCKET_ID_ARRAY = [];
           ( NOTE: This will used to store the socket ids, you can use database or any other storage.)
    

    Steps:
    1.Run the project using command "njs2 run serverless";
    2. In Postman, click on File -> New -> Websocket Request
    3. Enter "ws://localhost:3001" URL to connect websocket locally.
    4. Click on connect and you will recieve message as below:
        "newly connected socket_idckw33flmq0000ilv342xp57jp"
        (NOTE: To understand this message, please read socketConnect API)
    5. Send the below message:
          {
            "action":"example/socketApiGateway" ,   
            "request_id":"test123",
            "body": {},
            "headers": {},
            "method": "GET"
          }
        (NOTE: in 'action' target API is defined and 'request_id' for identity purpose used also 'method' type is required, similar to the SocketIO)
    6. For sending above message you will get reponse as All connected socket id's in array. (SOCKET_ID_ARRAY which is defined in global).
    */

    this.setResponse("SUCCESS");
    return { ALL_USERS: GLB.SOCKET_ID_ARRAY };
  }
}
module.exports = ExampleSocketApiGatewayAction;
