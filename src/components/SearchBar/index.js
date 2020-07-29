import React, { useState } from 'react';
import './index.scss';
import { getImagePath } from "../../util/common"

let preventSearchUpdate = false;
function SearchBar(props) {
	const { placeHolderText, handleSearch } = props;

	const handleQueryUpdate = (e) => {
		preventSearchUpdate = false;
		handleSearch && handleSearch(e.target.value);
	};

	return (
		<div className='searchbar-wrapper'>
			<input
				type='text'
				className='search-input'
				placeHolder={placeHolderText}
				onChange={handleQueryUpdate}
			/>
			<img src={getImagePath("/search1.png")} className='search' alt='' />
		</div>

	);
}

SearchBar.defaultProps = {
	placeHolderText: 'Search here',
	searchIcon: '/search_icon.png',
	handleSearch: () => console.log('')
};


export default SearchBar;
