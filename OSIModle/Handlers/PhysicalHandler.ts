import IHandler from "../interfaces/IHandler";
import Request from "../Request/Request";
import BaseHandler from "./BaseHandler";

class PhysicalHandler extends BaseHandler {
  public handle(request: string[]) {
    console.log("Physical");

    Request.message += "," + request.shift();
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    }
  }

  public handleDecode(request: string) {
    console.log("Physical");
    Request.decodeMessage.unshift(request.split(",")[6]);
    if (this.nextHandler) {
      this.nextHandler.handleDecode(request);
    }
  }
}

export default PhysicalHandler;