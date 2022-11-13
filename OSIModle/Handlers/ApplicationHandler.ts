import IHandler from "../interfaces/IHandler";
import Request from "../Request/Request";
import BaseHandler from "./BaseHandler";

class ApplicationHandler extends BaseHandler {
  public handle(request: string[]) {
    console.log("app");

    Request.message += request.shift();
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    }
  }
  public handleDecode(request: string) {
    console.log("app");
    Request.decodeMessage.unshift(request.split(",")[0]);
    if (this.nextHandler) {
      this.nextHandler.handleDecode(request);
    }
  }
}

export default ApplicationHandler;
