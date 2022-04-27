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


	function durationCalc(duration) {
		const hours = ((duration / 60).toString()).split('.')[0];
		const minutes = (duration % 60);
		return `${hours} ч. ${minutes} мин.`;
	}

	function formatDate(JSONdate, str) {
		const monthsArr = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Ноября', 'Декабря'];
		const time = JSONdate.substring(JSONdate.indexOf('T') + 1, JSONdate.indexOf('T') + 6);
		const date = JSONdate.substring(8, 10);
		let month;
		monthsArr.forEach((element, i) => {
			if (i + 1 === Number(JSONdate.substring(5, 7))) {
				month = element.toLowerCase();
			}
		});
		if (str === 'departureDate') {
			return `${time} ${date} ${month}`
		} else {
			return `${date} ${month} ${time}`
		}
	}

	return (
		<>
			<div className='ticket__section'>
				{departureCity ? <h3 className='ticket__title'>{departureCity.caption}</h3> : ''}
				{departureAirport ? <p className='ticket__title-id'>{departureAirport.caption + ' ' + `(${departureAirport.uid})`}</p> : ''}
				<span className='ticket__flight-direction'>&rarr;</span>
				{arrivalCity ? <h3 className='ticket__title'>{arrivalCity.caption}</h3> : ''}
				{arrivalAirport ? <p className='ticket__title-id'>{arrivalAirport.caption + ' ' + `(${arrivalAirport.uid})`}</p> : ''}
			</div>
			<div className='ticket__date-section'>
				<div className='ticket__date-wrapper'>
					<p className='ticket__hours-date'>{formatDate(departureDate, 'departureDate')}</p>
					{/* <p className='ticket__week-date'></p> */}
					<p className='ticket__duration'>{durationCalc(flightDuration)}</p>
					<p className='ticket__hours-date'>{formatDate(arrivalDate, 'arrivalDate')}</p>
				</div>
				<p className='ticket__stops'>{secondSegment ? '1 пересадка' : ''}</p>
			</div>
			<p className='ticket__airline-info'>Рейс выполняет: {airlineCaption.caption}</p>
		</>
	);
}

export default TicketLegs;
