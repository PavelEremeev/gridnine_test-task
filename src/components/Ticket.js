import './Ticket.css';

const title1 = 'Москва, Шереметьево'
const titleAIR = '(SVO)'
const title2 = 'Лондон, Хитроу'
const titleAIR2 = '(LHR)'

function Ticket() {
	return (
		<article className='ticket'>
			<div className='ticket__wrapper'>
				<div className='ticket__header'>
					<h2 className='ticket__airline-title'>POLISH</h2>
					<div className='ticket__header-wrapper'>
						<p className='ticket__price'>123213 P</p>
						<span className='ticket__price-desription'>Стоимость для одного взрослого пассажира</span>
					</div>
				</div>
				<div className='ticket__section'>
					<h3 className='ticket__title'>{title1}</h3>
					<p className='ticket__title-id'>{titleAIR}</p>
					<span className='ticket__flight-direction'>&rarr;</span>
					<p className='ticket__title-id'>{titleAIR2}</p>
					<h3 className='ticket__title'>{title2}</h3>
				</div>
				<div className='ticket__date-section'>
					<div className='ticket__date-wrapper'>
						<p className='ticket__hours-date'>20:40</p>
						<p className='ticket__week-date'>18 авг. вт</p>
						<p className='ticket__duration'>14ч 45 мин</p>
						<p className='ticket__week-date'>19 авг. вт</p>
						<p className='ticket__hours-date'>09:25</p>
					</div>
					<p className='ticket__stops'>1 пересадка</p>
				</div>
				<p className='ticket__airline-info'>Рейс выполняет:</p>
				<div className='ticket__section'>
					<h3 className='ticket__title'>{title1}</h3>
					<p className='ticket__title-id'>{titleAIR}</p>
					<span className='ticket__flight-direction'>&rarr;</span>
					<p className='ticket__title-id'>{titleAIR2}</p>
					<h3 className='ticket__title'>{title2}</h3>
				</div>
				<div className='ticket__date-section'>
					<div className='ticket__date-wrapper'>
						<p className='ticket__hours-date'>20:40</p>
						<p className='ticket__week-date'>18 авг. вт</p>
						<p className='ticket__duration'>14ч 45 мин</p>
						<p className='ticket__week-date'>19 авг. вт</p>
						<p className='ticket__hours-date'>09:25</p>
					</div>
					<p className='ticket__stops'>1 пересадка</p>
				</div>
				<p className='ticket__airline-info'>Рейс выполняет:</p>
				<button className='ticket__button'>ВЫБРАТЬ</button>
			</div>

		</article>
	);
}

export default Ticket;
