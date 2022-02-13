import React, {Component} from 'react'
import Navigation from "./Navigation"
import {compose} from "redux"
import {getMovies} from "../../redux/movieDb-reducer"
import {connect} from "react-redux"

class NavigationContainer extends Component {

    onSetGenre = (genre) => {
        this.props.getMovies(this.props.currentPage, this.props.category, genre)
    }

    onSetCategory = (category) => {
        this.props.getMovies(1, category, this.props.genre)
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

export default compose(connect(mapStateToProps, {getMovies}))(NavigationContainer)