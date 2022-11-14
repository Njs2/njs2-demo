class ExampleSocketDisconnectAction extends baseAction {
  async executeMethod() {
    
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
