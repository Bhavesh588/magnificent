import React from 'react'

import './Search.scss'
import SearchIcon from '@material-ui/icons/Search';

function Search() {
    return (
        <div className="search-wrapper">
            <input type="text" id="search" placeholder="Search" />
            <SearchIcon style={{fill: '#777'}} id="material-icons"/>
        </div>
    )
}

export default Search
