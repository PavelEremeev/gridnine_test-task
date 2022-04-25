import React from "react";

import './Sidebar.css';

function Sidebar(props) {
	return (
		<section className='sidebar'>
			<div className='sidebar__wrapper'>
				<h4 className='sidebar__caption'>Сортировать</h4>
				<h4 className='sidebar__caption'>Фильтровать</h4>
				<h4 className='sidebar__caption'>Цена</h4>
				<h4 className='sidebar__caption'>Авиакомпании</h4>
			</div>
		</section>
	)
}

export default Sidebar