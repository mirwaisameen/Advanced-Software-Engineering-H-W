import IHandler from "../interfaces/IHandler";
import Request from "../Request/Request";
import BaseHandler from "./BaseHandler";

class NetworkHandler extends BaseHandler {
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

export default NetworkHandler;