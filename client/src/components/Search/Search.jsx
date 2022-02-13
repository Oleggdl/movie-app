import React, {useState} from 'react'
import Search from "antd/es/input/Search";
import './Search.scss'

const SearchComponent = ({onSearch, onMovies, setSearch}) => {

    const [localSearch, setLocalSearch] = useState('')

    const setValue = value => {
        setSearch(value)
        setLocalSearch(value)
        if (localSearch === '') {
            onMovies()
        }
    }

    return (
        <>
            <div className="searchContainer">
                <Search placeholder="search" onSearch={onSearch} onChange={e => setValue(e.target.value)}
                        value={localSearch} className="search"/>
            </div>
        </>
    )
}

export default SearchComponent