import IHandler from "../interfaces/IHandler";
import Request from "../Request/Request";
import BaseHandler from "./BaseHandler";

class SessionHandler extends BaseHandler {
  public handle(request: string[]) {
    console.log("session");

    Request.message += "," + request.shift();
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    }
  }

  public handleDecode(request: string) {
    console.log("session");
    Request.decodeMessage.unshift(request.split(",")[2]);
    if (this.nextHandler) {
      this.nextHandler.handleDecode(request);
    }
  }
}

export default SessionHandler;