class ExampleSocketDisconnectAction extends baseAction {
  async executeMethod() {
    /*
    SOCKET DISCONNECT EXAMPLE

    Steps:
    1. This will execute when the socket is disconnected.
    2. In this example, we expects the socket_id of socket disconnection (Read init.js for setup).
    3. On diconnection event socket id will be removed from the sockets list, i.e SOCKET_ID_ARRAY.
    4. Then Broadcast message will send to all the remaining sockets. 
    */

    let { socket_id } = this;

    //getting index of disconnected socket id
    let index = GLB.SOCKET_ID_ARRAY.indexOf(socket_id);

    //removing socket id from array
    GLB.SOCKET_ID_ARRAY.splice(index, 1);

    //broadcasting to remaining sockets
    GLB.SOCKET_ID_ARRAY.map((s_id) => {
      SOCKETManager.emit(s_id, "disconnected socket_id" + socket_id);
    });

    this.setResponse("SUCCESS");
    return {};
  }
}
module.exports = ExampleSocketDisconnectAction;
