import IHandler from "../interfaces/IHandler";
import Request from "../Request/Request";
import Base from "./Base";

class Network extends Base {
  public handle(request: string[]) {
    console.log("Network");

    Request.message += "," + request.shift();
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    }
  }
  public handleDecode(request: string) {
    console.log("Network");
    Request.decodeMessage.unshift(request.split(",")[4]);
    if (this.nextHandler) {
      this.nextHandler.handleDecode(request);
    }
  }
}

export default Network;