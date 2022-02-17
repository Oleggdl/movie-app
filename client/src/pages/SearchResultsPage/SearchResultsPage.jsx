import React, {useState} from 'react'
import './SearchResultsPage.scss'
import MovieElementContainer from "../../components/MovieElement/MovieElementContainer"
import Pagination from '../../components/Paginator/Paginator'
import NavigationContainer from "../../components/Navigation/NavigationContainer"
import SearchContainer from "../../components/Search/SearchContainer"
import {MenuOutlined} from "@ant-design/icons";

const SearchResultsPage = ({movies, onPageChangeVideo, onPageChangeMovies, search, currentPage}) => {

    const movieArray = movies.length !== 0 ? movies.results : []

    const [isBurgerMenu, setIsBurgerMenu] = useState(false)
    const [countsWindowsDescriptions, setCountsWindowsDescriptions] = useState(0)
    const [isDescriptionForPagination, setIsDescriptionForPagination] = useState(false)

    const closeBurgerMenu = () => {
        !isBurgerMenu ? setIsBurgerMenu(true) : setIsBurgerMenu(false)
    }

    return (
        <div className="wrapper">
            <header className="header">
                <div className="burgerMenu">
                    <MenuOutlined onClick={closeBurgerMenu}/>
                </div>
                <NavigationContainer isBurgerMenu={isBurgerMenu} closeBurgerMenu={closeBurgerMenu}/>
                <SearchContainer/>
            </header>

            {movieArray.length !== 0
                ? <div className="moviesWrapper">
                    {movieArray.map((element, index) => (
                        <div className="movieElement" key={index}>
                            <MovieElementContainer movieId={index}
                                                   countsWindowsDescriptions={countsWindowsDescriptions}
                                                   setCountsWindowsDescriptions={setCountsWindowsDescriptions}
                                                   isDescriptionForPagination={isDescriptionForPagination}
                                                   setIsDescriptionForPagination={setIsDescriptionForPagination}/>
                        </div>
                    ))}
                </div>
                : <h2 className="noResultsText">No results!</h2>}

            <div className="paginatorContainer">
                <Pagination total={movies.total_results} pageSize={20} currentPage={currentPage}
                            onPageChange={search === '' ? onPageChangeMovies : onPageChangeVideo}
                            setIsDescriptionForPagination={setIsDescriptionForPagination}
                />
            </div>
        </div>
    )
}

export default SearchResultsPage