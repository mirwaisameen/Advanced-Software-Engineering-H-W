import IHandler from "../interfaces/IHandler";
import Request from "../Request/Request";
import BaseHandler from "./BaseHandler";

class DataLinkHandler extends BaseHandler {
  public handle(request: string[]) {
    console.log("data link");

    Request.message += "," + request.shift();
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    }
  }
  public handleDecode(request: string) {
    console.log("data link");
    Request.decodeMessage.unshift(request.split(",")[5]);
    if (this.nextHandler) {
      this.nextHandler.handleDecode(request);
    }
  }
}

export default DataLinkHandler;