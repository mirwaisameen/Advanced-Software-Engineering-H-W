import IHandler from "../interfaces/IHandler";
import Request from "../Request/Request";
import Base from "./Base";

class Session extends Base {
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

export default Session;