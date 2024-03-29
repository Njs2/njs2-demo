## SOCKET CONNECT EXAMPLE

### Steps:
1. This will be executed when socket connection is triggered.
2. In this example, we expects the ```socket_id``` of socket connection (Read ```init.js``` for setup).
3. While socket connection establishing, socket id will automatically passed to this action as ```socket_id```
4. If you want access_token for connection, make sure you have following setup in init.js,
```javascript
this.initializer.isSecured = true;
```
5. You can't pass access_token or any data in header while connection establishing, you have to pass it in connection URL as shown below,
  - For SocketIO: [http://localhost:3001?name=user123&access_token=<ACCESS_TOKEN>](http://localhost:3001?name=user123&access_token=<ACCESS_TOKEN>)
  - For ApiGateway: [ws://localhost:3001?name=user123&access_token=<ACCESS_TOKEN>](ws://localhost:3001?name=user123&access_token=<ACCESS_TOKEN>)
6. So socket_id will store in ```SOCKET_ID_ARRAY```, which is global variable.
7. Then the below message will be broadcasted to all client connections using map funtion.
```javascript
newly connected socket_id <socket_id_recieved>
```
8. Use the below code to emit message using 'SOCKET' object. 
```javascript
SOCKET.emit('socket_id', 'message')
```
