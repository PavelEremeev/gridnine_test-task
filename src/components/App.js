import './App.css';

import TicketList from './TicketList';

import flights from '../mocks/flights.json'
import Sidebar from './Sidebar';

const flightsData = flights.result.flights
console.log(flightsData)

function App() {
	return (
		<div className='app'>
			<Sidebar />
			<TicketList flights={flightsData} />
		</div>
	);
}

export default App;
