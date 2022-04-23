import React from "react";
import Ticket from "./Ticket";
import flights from '../mocks/flights.json'

import './TicketList.css';

const ticketList = flights.result.flights
console.log(ticketList)
console.log(ticketList[0].flight.legs.segments[0].arrivalAirport)
function TicketList() {
	return (
		ticketList.map((ticket, i) =>
			<Ticket
				carrierCaption={ticket.flight.carrier.caption}
				priceTotal={ticket.flight.price.total.amount}
				arrAirport={ticket.flight.legs.segments[0].arrivalAirport}

			/>)

	)
}

export default TicketList;