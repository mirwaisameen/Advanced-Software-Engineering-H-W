import ApplicationHandler from "./Handlers/Application";
import DataLinkHandler from "./Handlers/DataLink";
import NetworkHandler from "./Handlers/Network";
import PhysicalHandler from "./Handlers/Physical";
import PresentationHandler from "./Handlers/Presentation";
import SessionHandler from "./Handlers/Session";
import TransportHandler from "./Handlers/Transport";
import Request from "./Request/Request";

export const encode = () => {
  const request = [
    "application",
    "presentation",
    "session",
    "transport",
    "network",
    "dataLink",
    "physical",
  ];

  const application = new Application();
  const presentation = new Presentation();
  const session = new Session();
  const transport = new Transport();
  const network = new Network();
  const dataLink = new DataLinkr();
  const physical = new Physical();

  application
    .setNext(presentation)
    .setNext(session)
    .setNext(transport)
    .setNext(network)
    .setNext(dataLink)
    .setNext(physical);

  application.handle(request);
  console.log(Request.message);
};

export const decode = () => {
  const request =
    "application,presentation,session,transport,network,dataLink,physical";
  const application = new Application();
  const presentation = new Presentation();
  const session = new Session();
  const transport = new Transport();
  const network = new Network();
  const dataLink = new DataLink();
  const physical = new Physical();

  physical
    .setNext(dataLink)
    .setNext(network)
    .setNext(transport)
    .setNext(session)
    .setNext(presentation)
    .setNext(application);

  physical.handleDecode(request);
  console.log(Request.decodeMessage);
};

decode()