import React, {Component} from 'react'
import {compose} from "redux"
import {connect} from "react-redux"
import {getMovies, searchVideo, setSearch} from "../../redux/movieDb-reducer"
import SearchComponent from "./Search"

class SearchContainer extends Component {

    setSearch = value => {
        this.props.setSearch(value)
    }

    onSearch = value => {
        if (value !== '' || value.match(/\s/) === value) {
            this.props.searchVideo(this.props.currentPage, value, this.props.search)
        } else {
            this.props.getMovies(this.props.currentPage, this.props.category, this.props.genre)
        }
    }

    render() {
        return (
            <>
                <SearchComponent onSearch={this.onSearch}
                                 setSearch={this.setSearch}
                                 search={this.props.search}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    currentPage: state.movieDbReducer.currentPage,
    category: state.movieDbReducer.category,
    genre: state.movieDbReducer.genre,
    query: state.movieDbReducer.query,
    search: state.movieDbReducer.search
})

export default compose(connect(mapStateToProps,
    {searchVideo, getMovies, setSearch})
)(SearchContainer)