import React from 'react';
import TicketList from './Ticket/TicketList';
import Sidebar from './Sidebar/Sidebar';
import flights from '../mocks/flights.json'

import './App.css';

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
