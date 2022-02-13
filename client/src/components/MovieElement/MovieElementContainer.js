import React, {Component} from 'react'
import {bindActionCreators, compose} from "redux"
import {connect} from "react-redux"
import MovieElement from "./MovieElement";
import {getGenres, getMovies, getVideo} from "../../redux/movieDb-reducer";


class MovieElementContainer extends Component {

    componentDidMount() {
        // this.props.getMovies()
        this.props.getGenres()
    }

    onGetVideo = (videoId) => {
        this.props.getVideo(videoId)
    }

    render() {
        return (
            <MovieElement movies={this.props.movies}
                          genres={this.props.genres}
                          movieId={this.props.movieId}
                          videoId={this.props.videoId}
                          video={this.props.video}
                          onGetVideo={this.onGetVideo}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state.movieDbReducer.movies,
    genres: state.movieDbReducer.genres,
    video: state.movieDbReducer.video,
    videoId: state.movieDbReducer.videoId
})

let mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        getMovies,
        getGenres,
        getVideo
    }, dispatch)



export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(MovieElementContainer)