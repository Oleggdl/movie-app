import React from 'react'
import {compose} from "redux"
import {connect} from "react-redux"
import SearchResultsPage from "./SearchResultsPage"
import {getGenres, getMovies, searchVideo} from "../../redux/movieDb-reducer"

class SearchResultsPageContainer extends React.Component {

    componentDidMount() {
        this.props.getMovies(this.props.currentPage , this.props.category, this.props.genre)
        this.props.getGenres()
    }

    onPageChangeMovies = (page) => {
        this.props.getMovies(page, this.props.category, this.props.genre)
    }

    onPageChangeVideo = (page) => {
        this.props.searchVideo(page, this.props.query)
    }

    render() {
        return (
            <SearchResultsPage movies={this.props.movies}
                               onPageChangeMovies={this.onPageChangeMovies}
                               onPageChangeVideo={this.onPageChangeVideo}
                               search={this.props.search}
                               currentPage={this.props.currentPage}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state.movieDbReducer.movies,
    currentPage: state.movieDbReducer.currentPage,
    category: state.movieDbReducer.category,
    query: state.movieDbReducer.query,
    genre: state.movieDbReducer.genre,
    search: state.movieDbReducer.search
})

export default compose(
    connect(mapStateToProps, {getMovies, getGenres, searchVideo}))(SearchResultsPageContainer)

