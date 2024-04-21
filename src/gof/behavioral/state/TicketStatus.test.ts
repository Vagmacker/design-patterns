import Ticket from "./Ticket";
import { RequestedStatus } from "./TicketStatus";

describe("TicketStatus Unit Test", (): void => {
  it("should transit to assigned status when calls assign", () => {
    // given
    const expectedStatus = "assigned";
    const expectedTicket = new Ticket();
    const target = new RequestedStatus(expectedTicket);

    // when
    target.assign();

    // then
    expect(expectedStatus).toBe(expectedTicket.getStatus().value);
  });

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
});
