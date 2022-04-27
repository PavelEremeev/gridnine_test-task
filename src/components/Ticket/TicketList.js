import React from 'react'
import Ticket from './Ticket'

import './TicketList.css'

const TicketList = ({ flights, loadMore }) => {

	return (
		<div className='ticket-list_wrapper'>
			{flights.map((flight) =>
				<Ticket
					key={flight.flightToken}
					{...flight}
				/>
			)}
			<button className='ticket-list__button' onClick={loadMore}>Показать ещё</button>
		</div>
	)
}

export default TicketList
