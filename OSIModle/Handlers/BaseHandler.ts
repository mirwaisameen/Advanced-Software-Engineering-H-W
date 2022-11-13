import IHandler from "../interfaces/IHandler";

class BaseHandler implements IHandler {
  protected nextHandler: IHandler;
  message: string = "";
  requestType: string;

  public setNext(handler: IHandler): IHandler {
    this.nextHandler = handler;
    // Returning a handler from here will let us link handlers in a
    // convenient way like this:
    // monkey.setNext(squirrel).setNext(dog);
    return handler;
  }

  handle(request: string[]) {
    throw new Error("Method not implemented.");
  }
  handleDecode(request: string) {
    throw new Error("Method not implemented.");
  }
}

export default BaseHandler;
