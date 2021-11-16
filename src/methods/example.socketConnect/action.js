const {sockets} = require("@njs2/base");

class ExampleSocketConnectAction extends baseAction {
  async executeMethod() {
    /*
    SOCKET CONNECT EXAMPLE

    Prerequisites:
    1. This will execute when the socket is connected. No need to run externally.
    2. Import sockets from @njs2/base.
    3. In this example, we expects the socket_id of socket connection (Read init.js for setup).
    4. Then socket_id is stored in "SOCKET_ID_ARRAY", which is global variable.
    5. Then It broadcasted to all socket_id using map funtion.
    6. Hence while connection established every user will get the message.
    */


    let { socket_id } = this;
    console.log(socket_id);

    GLB.SOCKET_ID_ARRAY.push(socket_id);

    GLB.SOCKET_ID_ARRAY.map((s_id)=>{
      sockets.emit(s_id, "newly connected socket_id" + socket_id);
    })

    this.setResponse("SUCCESS");
    return {};
  }
}
module.exports = ExampleSocketConnectAction;
