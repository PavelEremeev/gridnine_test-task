import React from 'react';

import './SortBlock.css';

function SortBlock({ onSort, setSortingValue }) {

	function sortHandler(evt) {
		setSortingValue(evt.target.value)
		onSort(evt.target.value)
		console.log(evt.target.value)
	}

	return (
		<form className='sort__form'>
			<h4 className='sort__caption'>Сортировать</h4>
			<div className='sort__wrapper'>
				<input
					type='radio'
					id='highPrice'
					name='sort'
					value='HIGH'
					onChange={sortHandler}
				/>
				<label htmlFor='highPrice'>- по возрастанию цены</label>
			</div>
			<div className='sort__wrapper'>
				<input
					type='radio'
					id='lowPrice'
					name='sort'
					value='LOW'
					onChange={sortHandler}
				/>
				<label htmlFor='lowPrice'>- по убыванию цены</label>
			</div>
			<div className='sort__wrapper'>
				<input
					type='radio'
					id='lowTime'
					name='sort'
					value='TIME'
					onChange={sortHandler}
				/>
				<label htmlFor='lowTime'>- по времени в пути</label>
			</div>
		</form>
	)
}

export default SortBlock