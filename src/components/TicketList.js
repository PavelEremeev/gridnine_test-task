

import React from 'react'
import Ticket from './Ticket'

const TicketList = (props) => {
	const { flights } = props

	return (
		<div className="ticket-list_wrapper">
			{flights.map((flight) =>
				<Ticket
					key={flight.flightToken}
					{...flight}
				/>
			)}
		</div>
	)
}

export default TicketList
