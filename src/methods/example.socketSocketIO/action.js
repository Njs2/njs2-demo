class ExampleSocketSocketIOAction extends baseAction {
  async executeMethod() {
    /*
    SOCKET CONNECTION USING SOCKET_IO EXAMPLE

    Prerequisites:
    1. In config.json, set the following:
        "SOCKET_SYSTEM_TYPE": "SOCKET_IO"

    2. Write two html files with the following code namely index1.html and index2.html:
          <script 
            src="https://cdn.socket.io/3.1.3/socket.io.min.js"
            integrity="sha384-cPwlPLvBTa3sKAgddT6krw0cJat7egBga3DJepJyrLl4Q9/5WLra3rrnMcyTyOnh" crossorigin="anonymous">
          </script>

          <script>
            var socket = io.connect('http://localhost:3001', { transports: ['websocket'] });
            socket.on('message', function (data) {
              console.log("message recieved=> ",data);
            });

            const sendmessage=async ()=>{
              console.log("Button pressed, So message will send");
              await socket.emit('message',   {
                "action": "example/socketSocketIO" 
                "request_id": "test123",
                "body": {},
                "headers": {},
                "method": "GET"
              })
            }
          </script>
          <button onclick="sendmessage()">send</button>

    3. Set the API to trigger when the socket is connected in global/constants.js as follows:
          constant.CONNECTION_HANDLER_METHOD = "example/socketConnect";  //this will trigger while conection is established
          constant.DISCONNECTION_HANDLER_METHOD = "example/socketDisconnect";  //this will trigger while conection is disconnected
          (NOTE: Please read  example/socketConnect.js and example/socketDisconnect.js files for more details)

    4. In socketio.js, under "CONNECT" case (switch case) set the following:
            wsEvent.queryStringParameters = { socket_id: event.requestContext.connectionId };
            //passing connection id as socket_id to socketConnect method.

    5. In socketio.js, under "DISCONNECT" case (switch case) set the following:
            wsEvent.queryStringParameters = { socket_id: event.requestContext.connectionId };
            //passing connection id as socket_id to socketDisconnect method.

    6. In global/constants.js, define the following:
            constant.SOCKET_ID_ARRAY = [];
           ( NOTE: This will used to store the socket ids, you can use database or any other storage.)
            
    Steps:
    1. After running this example, Open index1.html in browser and open console in Browser. 
      (NOTE: press ctrl+shift+i to open the console in browser)
    2. Open index2.html in browser and open console in Browser.
    3. In console you will recieve the following message for each connection is established:
          message recieved=>  newly connected socket_id_JTcsKa8igIeBiewAAAD
          (NOTE: To understand this message, please read socketConnect API)
    4. Press the send button in index1.html and you will recieve the following message in console:
          Button pressed, So message will send
          (NOTE: This indicates that the message is sent to the socket)
    5. You may have noticed that "example/socketSocketIO" is set in "action" field in html snippet which is given in prerequisites.
       That means, While emitting message this API will execute.
       "request_id" is just to maintain the request id for the request.
    6. So while pressing the button, this example will execute and return SOCKET_ID_ARRAY in response.


    */

    this.setResponse("SUCCESS");
    return { ALL_USERS: GLB.SOCKET_ID_ARRAY };
  }
}
module.exports = ExampleSocketSocketIOAction;
