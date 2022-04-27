import React, { useState, useEffect } from 'react';
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
	const [count, setCount] = useState(2)


	useEffect(() => {
		filterAll()
		setFlights(filterAll())
	}, [count, price, sortingValue, filterTransfer])

	// Подгрузка новых билетов
	function loadMoreHandler() {
		setCount((count) => count + 2)
	}

	// Основная функция для сортировка в SortBlock
	function sortHandler(sort, arr) {
		let sortedFlights = []
		if (!arr) {
			sortedFlights = [...flights]
		} else {
			sortedFlights = [...arr]
		}

		switch (sort) {
			case 'HIGH':
				sortedFlights = sortedFlights.sort((a, b) => sortPrice(a, b))
				return sortedFlights

			case 'LOW':
				sortedFlights = sortedFlights.sort((a, b) => sortPrice(a, b))
				return sortedFlights.reverse()

			case 'TIME':
				sortedFlights = sortedFlights.sort((a, b) => dateFilter(a, b))
				return sortedFlights

			default:
				return sortedFlights

		}
	}

	// Функции обработчики цены для сортировки 
	function sortPrice(a, b) {
		let firstPrice = +a.flight.price.total.amount
		let secondPrice = +b.flight.price.total.amount
		console.log(firstPrice)
		if (firstPrice > secondPrice) {
			return 1
		} else if (firstPrice < secondPrice) {
			return -1
		}
		return 0
	}

	// Функции обработчики даты для сортировки 
	function dateFilter(a, b) {
		let dateFrom = a.flight.legs[0].duration + a.flight.legs[1].duration
		let dateTo = b.flight.legs[0].duration + b.flight.legs[1].duration
		if (dateFrom > dateTo) {
			return 1
		} else if (dateFrom < dateTo) {
			return -1
		}
		return 0
	}

	function filterHandler(filter, arr) {
		let filteredFlights = []
		if (!arr) {
			filteredFlights = [...flightsData]
		} else {
			filteredFlights = [...arr]
		}

		switch (filter) {
			case 'oneTransfer':
				if (filterTransfer.oneTransferFiltered) {
					filteredFlights = filteredFlights.filter((flight) =>
						flight.flight.legs[0].segments.length >= 2 &&
						flight.flight.legs[1].segments.length >= 2)
				} else if (!filterTransfer.oneTransferFiltered) {
					return (filteredFlights = [...filteredFlights])
				}

				return filteredFlights.slice(0, count)

			case 'withoutTransfer':
				if (filterTransfer.withoutTransferFiltered) {
					filteredFlights = filteredFlights.filter((flight) =>
						flight.flight.legs[0].segments.length === 1 &&
						flight.flight.legs[1].segments.length === 1)
				} else if (!filterTransfer.withoutTransferFiltered) {
					filteredFlights = [...filteredFlights]
				}

				return filteredFlights.slice(0, count)

			default:
				return filteredFlights.slice(0, count)
		}
	}

	function priceHandler(price, arr) {
		let filteredPrice = []
		if (!arr) {
			filteredPrice = [...flightsData]
		} else {
			filteredPrice = [...arr]
		}


		filteredPrice = filteredPrice.filter((flight) =>
			+flight.flight.price.total.amount >= +price.minPrice &&
			+flight.flight.price.total.amount <= +price.maxPrice
		)
		return filteredPrice.slice(0, count)
	}

	const filterAll = () => {
		let filteredArr = []
		filteredArr = [...filterHandler(filterValue)]
		filteredArr = [...sortHandler(sortingValue, filteredArr)]
		filteredArr = [...priceHandler(price, filteredArr)]
		return filteredArr
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
			<TicketList flights={flights} loadMore={loadMoreHandler} />
		</div>
	);
}

export default App;
