## SOCKET CONNECTION USING SOCKET_IO EXAMPLE

### Steps:
1. In ```config.json```, set the following:
```json
"SOCKET_SYSTEM_TYPE": "SOCKET_IO"
```
2. Please find ```index1.html``` and ```index2.html``` in the ```Assets/Downloads``` folder. Open both these files in your browser
3. Update the below content in ```global/constants.js```
```javascript
constant.CONNECTION_HANDLER_METHOD = "example/socketIOConnect";  //this will trigger while conection is established
constant.DISCONNECTION_HANDLER_METHOD = "example/socketIODisconnect";  //this will trigger while conection is disconnected
```
*NOTE: Please read ```example/socketConnect.js``` and ```example/socketDisconnect.js``` files for more details*\

4. In global/constants.js, define the following:
```javascript
constant.SOCKET_ID_ARRAY = [];
```
*NOTE: This will used to store the socket ids for below example, you can use database or any other storage as per your requirement.*\

5. To test this example make sure you are running the server as ```njs2 run```\
6. Open ```index1.html``` and ```index2.html``` in browser and open developer console of the respective browsers. 
*NOTE: You can find developer console in the settings of the browser*\

7. In console you will recieve the following message once the connection is established:
```javascript
message recieved=>  newly connected socket_id_JTcsKa8igIeBiewAAAD
```
8. Press the send button in index1.html and you will recieve the following message in the console
```javascript
Button pressed, So message will send
```
*NOTE: This indicates that the message is sent to the socket*\

9. In html files, You might have noticed that 
```javascript
action : "example/socketIo" (While emitting message this action or API would execute).
request_id : is just to maintain the identity for the request.
method : specifies the http method, "GET" or "POST".
```
*NOTE: Please read the html files for more understanding*

10. So while pressing the button, this example will execute and return ```SOCKET_ID_ARRAY``` in response.
