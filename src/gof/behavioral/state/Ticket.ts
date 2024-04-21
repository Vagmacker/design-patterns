import TicketStatus, { RequestedStatus } from "./TicketStatus";

export default class Ticket {
  status: TicketStatus;

  constructor() {
    this.status = new RequestedStatus(this);
  }

  assign() {
    this.status.assign();
  }

  start() {
    this.status.start();
  }

  close() {
    this.status.close();
  }

  getStatus() {
    return this.status;
  }
}
