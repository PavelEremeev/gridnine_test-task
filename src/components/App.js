import React, { useState } from 'react';
import TicketList from './Ticket/TicketList';
import Sidebar from './Sidebar/Sidebar';
import flights from '../mocks/flights.json'

import './App.css';

const flightsData = flights.result.flights
console.log(flightsData)



function App() {

	const [flights, setFlights] = useState([])
	const [price, setFilteringPrice] = useState({
		minPrice: 0,
		maxPrice: Infinity
	})
	const [sortingValue, setSortingValue] = useState('')
	const [filterValue, setFilteringValue] = useState('')
	const [filterTransfer, setFilterTransfer] = useState({
		oneTransferFiltered: false,
		withoutTransferFiltered: false,
	})
	const [count, setCount] = useState(5)

	function sortHandler() {

	}

	function filterHandler() {

	}

	function priceHandler() {

	}

	function loadMoreHandler() {
		setCount((count) => count + 5)
	}

	return (
		<div className='app'>
			<Sidebar
				onSort={sortHandler}
				setSortingValue={setSortingValue}
				onFilter={filterHandler}
				setFilteringValue={setFilteringValue}
				onCheck={filterTransfer}
				setChecked={setFilterTransfer}
				setFilteringPrice={setFilteringPrice}
				onFilteredPrice={priceHandler}
				price={price}
			/>
			<TicketList flights={flightsData} loadMore={loadMoreHandler} />
		</div>
	);
}

export default App;
