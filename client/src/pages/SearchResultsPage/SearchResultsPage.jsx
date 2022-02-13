import React, {useState} from 'react'
import './SearchResultsPage.scss'
import MovieElementContainer from "../../components/MovieElement/MovieElementContainer"
import Pagination from '../../components/Paginator/Paginator'
import NavigationContainer from "../../components/Navigation/NavigationContainer"
import SearchContainer from "../../components/Search/SearchContainer"
import {MenuOutlined} from "@ant-design/icons";

const SearchResultsPage = ({movies, onPageChangeVideo, onPageChangeMovies, search}) => {

    const movieArray = movies.length !== 0 ? movies.results : []

    const [isBurgerMenu, setIsBurgerMenu] = useState(false)

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

            <div className="moviesWrapper">
                {movieArray.map((element, index) => (
                    <div className="movieElement" key={index}>
                        <MovieElementContainer movieId={index}/>
                    </div>
                ))}
            </div>

            <div className="paginatorContainer">
                <Pagination total={movies.total_results} pageSize={20}
                            onPageChange={search === '' ? onPageChangeMovies : onPageChangeVideo}/>
            </div>
        </div>
    )
}

export default SearchResultsPage