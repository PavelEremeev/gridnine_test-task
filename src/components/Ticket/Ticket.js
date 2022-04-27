import React from 'react'
import TicketLegs from './TicketLegs'
import './Ticket.css';


function Ticket(props) {
	const { flight } = props
	const ticketForward = flight.legs[0]
	const ticketAway = flight.legs[1]

	return (
		<article className='ticket'>
			<div className='ticket__wrapper'>
				<div className='ticket__header'>
					<h3 className='ticket__airline-title'>{flight.carrier.caption}</h3>
					<div className='ticket__header-wrapper'>
						<p className='ticket__price'>{flight.price.total.amount} &#8381;</p>
						<span className='ticket__price-desription'>Стоимость для одного взрослого пассажира</span>
					</div>
				</div>
				<TicketLegs legs={ticketForward} />
				<TicketLegs legs={ticketAway} />
				<button className='ticket__button'>ВЫБРАТЬ</button>
			</div>

		</article>
	);
}

export default Ticket;
