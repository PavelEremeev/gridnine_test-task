import React from "react";

import SortBlock from './SortBlock';
import FilterBlock from './FilterBlock'
import PriceBlock from './PriceBlock';
import './Sidebar.css';


function Sidebar(props) {

	const {
		onSort,
		setSortingValue,
		onFilter,
		setFilteringValue,
		onCheck,
		setChecked,
		setFilteringPrice,
		onFilteredPrice,
		price
	} = props

	return (
		<aside className='sidebar'>
			<div className='sidebar__wrapper'>
				<SortBlock
					onSort={onSort}
					setSortingValue={setSortingValue}
				/>
				<FilterBlock
					onFilter={onFilter}
					setFilteringValue={setFilteringValue}
					onCheck={onCheck}
					setChecked={setChecked}
				/>
				<PriceBlock
					setFilteringPrice={setFilteringPrice}
					onFilteredPrice={onFilteredPrice}
					price={price}
				/>

				<h4 className='sidebar__caption'>Авиакомпании</h4>
			</div>
		</aside>
	)
}

export default Sidebar