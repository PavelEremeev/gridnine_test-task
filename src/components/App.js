import './App.css';

import TicketList from './TicketList';

import flights from '../mocks/flights.json'

const flightsData = flights.result.flights
console.log(flightsData)

function App() {
	return (
		<div className='App'>
			<TicketList flights={flightsData} />
		</div>
	);
}

export default App;
