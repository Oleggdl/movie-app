import React from 'react'
import Search from "antd/es/input/Search";
import './Search.scss'

const SearchComponent = ({onSearch, setSearch, search}) => {

    return (
        <>
            <div className="searchContainer">
                <Search placeholder="search" onSearch={onSearch} onChange={e => setSearch(e.target.value)}
                        value={search} className="search"/>
            </div>
        </>
    )
}

export default SearchComponent