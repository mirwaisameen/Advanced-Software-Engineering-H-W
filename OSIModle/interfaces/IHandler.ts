interface IHandler {
  setNext(handler: IHandler): IHandler;

  handle(request: string[] | string);
  handleDecode(request:  string);
}

export default IHandler;
