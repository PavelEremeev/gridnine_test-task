import React from "react";

import SortBlock from "./SortBlock";
import './Sidebar.css';

function Sidebar(props) {
	return (
		<aside className='sidebar'>
			<div className='sidebar__wrapper'>
				<SortBlock />
				<h4 className='sidebar__caption'>Фильтровать</h4>
				<h4 className='sidebar__caption'>Цена</h4>
				<h4 className='sidebar__caption'>Авиакомпании</h4>
			</div>
		</aside>
	)
}

export default Sidebar