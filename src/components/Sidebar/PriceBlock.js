import React, { useRef, useEffect } from "react";


import './PriceBlock.css';

function PriceBlock({ setFilteringPrice, onFilteredPrice, price }) {

	useEffect(() => {
		onFilteredPrice(price)
	}, [price])

	const minPrice = useRef(0)
	const highPrice = useRef(Infinity)

	function lowPriceHandler(evt) {
		console.log(highPrice)
		if (highPrice.current.value === '') {
			setFilteringPrice({
				...price,
				maxPrice: Infinity,
			})
		} if (evt.target.value <= price.maxPrice) {
			setFilteringPrice({
				...price,
				minPrice: +evt.target.value,
			})
		} else {
			return;
		}
	}

	function highPriceHandler(evt) {
		if (minPrice.current.value === '') {
			setFilteringPrice({
				...price,
				minPrice: 0,
			})
		}
		if (evt.target.value >= price.minPrice) {
			setFilteringPrice((price) => ({
				...price,
				maxPrice: +evt.target.value,
			}))
		} else {
			return
		}
	}


	return (
		<form className='price__form'>

			<h4 className='price__caption'>Цена</h4>
			<div className='price__wrapper'>
				<label htmlFor="lowPrice">от - </label>
				<input
					type="number"
					id="lowPrice"
					onInput={lowPriceHandler}
					ref={minPrice}

				/>
			</div>
			<div className='price__wrapper'>
				<label htmlFor="highPrice">до - </label>
				<input
					type="number"
					id="highPrice"
					onInput={highPriceHandler}
					ref={highPrice}

				/>
			</div>
		</form >
	)
}

export default PriceBlock