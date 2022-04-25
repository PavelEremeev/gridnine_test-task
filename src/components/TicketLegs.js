import React from 'react';
import './TicketLegs.css';


function TicketLegs(props) {
	const { legs } = props

	// Определяем пересадки
	const firstSegment = legs.segments[0]
	const secondSegment = legs.segments[1]

	// Константы для первого сегмента
	const departureCity = firstSegment.departureCity
	const departureAirport = firstSegment.departureAirport
	const departureDate = firstSegment.departureDate
	let arrivalCity = firstSegment.arrivalCity
	let arrivalAirport = firstSegment.arrivalAirport
	let arrivalDate = firstSegment.arrivalDate
	const airlineCaption = firstSegment.airline
	const flightDuration = legs.duration

	// Переопределяем константы для второго сегмента - в случае пересадки
	if (secondSegment) {
		arrivalCity = secondSegment.arrivalCity
		arrivalAirport = secondSegment.arrivalAirport
		arrivalDate = secondSegment.arrivalDate
	}

	return (
		<>
			<div className='ticket__section'>
				{departureCity ? <h3 className='ticket__title'>{departureCity.caption}</h3> : ''}
				{departureAirport ? <p className='ticket__title-id'>{departureAirport.caption + ' ' + departureAirport.uid}</p> : ''}
				<span className='ticket__flight-direction'>&rarr;</span>
				{arrivalAirport ? <p className='ticket__title-id'>{arrivalAirport.uid + ' ' + arrivalAirport.caption}</p> : ''}
				{arrivalCity ? <h3 className='ticket__title'>{arrivalCity.caption}</h3> : ''}
			</div>
			<div className='ticket__date-section'>
				<div className='ticket__date-wrapper'>
					<p className='ticket__hours-date'>{departureDate}</p>
					<p className='ticket__week-date'>{'18 авг. вт'}</p>
					<p className='ticket__duration'>{flightDuration}</p>
					<p className='ticket__week-date'>{'19 авг. вт'}</p>
					<p className='ticket__hours-date'>{arrivalDate}</p>
				</div>
				<p className='ticket__stops'>{secondSegment ? '1 пересадка' : ''}</p>
			</div>
			<p className='ticket__airline-info'>Рейс выполняет: {airlineCaption.caption}</p>
		</>
	);
}

export default TicketLegs;
