import React, { useRef } from 'react';

import './FilterBlock.css';

function FilterBlock({ onFilter, setFilteringValue, onCheck, setChecked }) {

	const oneTransfer = useRef('')
	const withoutTransfer = useRef('')

	function filterHandler(evt) {
		if (evt.target.value === oneTransfer.current.value) {
			setChecked({
				...onCheck,
				oneTransferFiltered: !onCheck.oneTransferFiltered,
				withoutTransferFiltered: false,
			})
		} else if (evt.target.value === withoutTransfer.current.value) {
			setChecked({
				...onCheck,
				oneTransferFiltered: false,
				withoutTransferFiltered: !onCheck.withoutTransferFiltered,
			})
		}
		setFilteringValue(evt.target.value)
		onFilter(evt.target.value)
	}

	return (
		<form className='filter__form'>
			<h4 className='filter__caption'>Фильтровать</h4>
			<div className='filter__wrapper'>
				<input
					type='checkbox'
					id='oneTransfer'
					value='oneTransfer'
					onChange={filterHandler}
					checked={onCheck.oneTransferFiltered}
					ref={oneTransfer}
				/>
				<label htmlFor='oneTransfer'>- 1 пересадка</label>
			</div>

			<div className='filter__wrapper'>
				<input
					type='checkbox'
					id='withoutTransfer'
					value='withoutTransfer'
					onChange={filterHandler}
					checked={onCheck.withoutTransferFiltered}
					ref={withoutTransfer}
				/>
				<label htmlFor='withoutTransfer'>- без пересадок</label>
			</div>
		</form>
	)
}

export default FilterBlock
