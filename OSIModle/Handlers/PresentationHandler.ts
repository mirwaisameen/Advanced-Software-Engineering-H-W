import IHandler from "../interfaces/IHandler";
import Request from "../Request/Request";
import BaseHandler from "./BaseHandler";

class PresentationHandler extends BaseHandler {
  public handle(request: string[]) {
    console.log("presentation");

    Request.message += "," + request.shift();
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    }
  }
  public handleDecode(request: string) {
    console.log("presentation");
    Request.decodeMessage.unshift(request.split(",")[1]);
    if (this.nextHandler) {
      this.nextHandler.handleDecode(request);
    }
  }
}

export default PresentationHandler;
