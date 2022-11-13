import ApplicationHandler from "./Handlers/ApplicationHandler";
import DataLinkHandler from "./Handlers/DataLinkHandler";
import NetworkHandler from "./Handlers/NetworkHandler";
import PhysicalHandler from "./Handlers/PhysicalHandler";
import PresentationHandler from "./Handlers/PresentationHandler";
import SessionHandler from "./Handlers/SessionHandler";
import TransportHandler from "./Handlers/TransportHandler";
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

  const application = new ApplicationHandler();
  const presentation = new PresentationHandler();
  const session = new SessionHandler();
  const transport = new TransportHandler();
  const network = new NetworkHandler();
  const dataLink = new DataLinkHandler();
  const physical = new PhysicalHandler();

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
  const application = new ApplicationHandler();
  const presentation = new PresentationHandler();
  const session = new SessionHandler();
  const transport = new TransportHandler();
  const network = new NetworkHandler();
  const dataLink = new DataLinkHandler();
  const physical = new PhysicalHandler();

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