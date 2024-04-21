import {
  AssignedStatus,
  RequestedStatus,
  InProgressStatus,
} from "./TicketStatus";
import Ticket from "./Ticket";

describe("TicketStatus Unit Test", (): void => {
  it("should transit to assigned status when calls assign", () => {
    // given
    const expectedStatus = "assigned";
    const expectedTicket = new Ticket();

    expect(expectedTicket.status.value).toBe("request");

    const target = new RequestedStatus(expectedTicket);

    // when
    target.assign();

    // then
    expect(expectedStatus).toBe(expectedTicket.getStatus().value);
  });

  it("should transit to in progress status when calls start", () => {
    // given
    const expectedStatus = "in_progress";
    const expectedTicket = new Ticket();

    expect(expectedTicket.status.value).toBe("request");

    const target = new AssignedStatus(expectedTicket);

    // when
    target.start();

    // then
    expect(expectedStatus).toBe(expectedTicket.getStatus().value);
  });

  it("should transit to closed status when calls start", () => {
    // given
    const expectedStatus = "closed";
    const expectedTicket = new Ticket();

    expect(expectedTicket.status.value).toBe("request");

    const target = new InProgressStatus(expectedTicket);

    // when
    target.close();

    // then
    expect(expectedStatus).toBe(expectedTicket.getStatus().value);
  });
});
