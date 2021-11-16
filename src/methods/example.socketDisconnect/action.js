const { sockets } = require("@njs2/base");
class ExampleSocketDisconnectAction extends baseAction {
  async executeMethod() {
    /*
    SOCKET DISCONNECT EXAMPLE

    Steps:
    1. This will execute when the socket is disconnected. No need to run externally.
    2. Import sockets from @njs2/base.
    3. In this example, we expects the socket_id of socket disconnection (Read init.js for setup).
    4. We will remove the socket from the sockets list, i.e SOCKET_ID_ARRAY.
    5. Then Broadcast message will send to all the remaining sockets. 
    */


    let { socket_id } = this;

    let index = GLB.SOCKET_ID_ARRAY.indexOf(socket_id);
    GLB.SOCKET_ID_ARRAY.splice(index, 1);

    GLB.SOCKET_ID_ARRAY.map((s_id)=>{
      sockets.emit(s_id, "disconnected socket_id" + socket_id);
    })

    this.setResponse("SUCCESS");
    return {};
  }
}
module.exports = ExampleSocketDisconnectAction;
