import IHandler from "../interfaces/IHandler";
import Request from "../Request/Request";
import Base from "./Base";

class Transport extends Base {
  public handle(request: string[]) {
    console.log("Transport");

    Request.message += "," + request.shift();
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    }
  }
  public handleDecode(request: string) {
    console.log("Transport");
    Request.decodeMessage.unshift(request.split(",")[3]);
    if (this.nextHandler) {
      this.nextHandler.handleDecode(request);
    }
  }
}

export default Transport;