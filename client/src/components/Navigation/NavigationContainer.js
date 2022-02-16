import React, {Component} from 'react'
import Navigation from "./Navigation"
import {compose} from "redux"
import {getMovies, setSearch} from "../../redux/movieDb-reducer"
import {connect} from "react-redux"

class NavigationContainer extends Component {

    onSetGenre = (genre) => {
        this.props.getMovies(1, this.props.category, genre)
        this.props.setSearch('')
    }

    onSetCategory = (category) => {
        this.props.getMovies(1, category, this.props.genre)
        this.props.setSearch('')
    }

    render() {
        return (
            <>
                <Navigation onSetGenre={this.onSetGenre}
                            onSetCategory={this.onSetCategory}
                            isBurgerMenu={this.props.isBurgerMenu}
                            closeBurgerMenu={this.props.closeBurgerMenu}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    category: state.movieDbReducer.category,
    genre: state.movieDbReducer.genre,
    currentPage: state.movieDbReducer.currentPage
})

export default compose(connect(mapStateToProps, {getMovies, setSearch}))(NavigationContainer)