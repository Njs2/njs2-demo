## SOCKET DISCONNECT EXAMPLE

### Steps:
1. This will execute when the socket is disconnected.
2. In this example, we expects the ```socket_id``` of socket disconnection (Read ```init.js``` for setup).
3. On diconnection event socket id will be removed from the sockets list, i.e ```SOCKET_ID_ARRAY```
4. Then Broadcast message will send to all the remaining sockets.
