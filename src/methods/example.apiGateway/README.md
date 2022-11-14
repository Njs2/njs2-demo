## SOCKET API GATEWAY EXAMPLE

### Steps:

1. In config.json, set the following:
```json
{ 
  // other pre-existing constants
  "SOCKET_SYSTEM_TYPE": "API_GATEWAY"
  "USE_LAMBDA_ROLE": "NO",
  "AWS_ACCESS_KEY_ID": "any_id",
  "AWS_SECRET_ACCESS_KEY_ID": "any_access_key"
}
```
*NOTE: If you are using locally, you can use the above fake credentials to test the socket connection*
        
2. Make sure you have Latest Postman which supports websockets ( Postman v8.5 and above).
   You can also use any other tools that support websockets.
   This example shows how to use Postman to test the websocket API Gateway.
   
3. Set the API to trigger when the socket is connected in global/constants.js as follows:
```javascript
constant.CONNECTION_HANDLER_METHOD = "example/socketConnect";  //this will trigger while conection is established
constant.DISCONNECTION_HANDLER_METHOD = "example/socketDisconnect";  //this will trigger while conection is disconnected
```
*NOTE: Please read  example/socketConnect.js and example/socketDisconnect.js files for more details)

4. In ```javscript global/constants.js```, define the following:
```javascript
constant.SOCKET_ID_ARRAY = [];
```
NOTE: This will used to store the socket ids, you can use database or any other storage.

5. Run the project using command ```njs2 run serverless```

6. In Postman, click on File -> New -> Websocket Request

7. Enter ```ws://localhost:3001``` URL to connect websocket locally

8. Click on connect and you will recieve message as below, because of the ```example/socketConnect.js``` file.
        
```newly connected socket_idckw33flmq0000ilv342xp57jp```

9. Send the below message:
```json
{
  "action":"example/socketApiGateway" ,   
  "request_id":"test123",
  "body": {},
  "headers": {},
  "method": "GET"
}
```
NOTE: in 'action' target API is defined and 'request_id' for identity purpose used also 'method' type is required)

10. For sending above message you will get reponse as All connected socket id's in array. (i.e SOCKET_ID_ARRAY)
