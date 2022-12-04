import IHandler from "../interfaces/IHandler";
import Request from "../Request/Request";
import Base from "./Base";

class Application extends Base {
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

export default Application;
