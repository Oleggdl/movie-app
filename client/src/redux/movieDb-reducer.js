import {TMDbAPI} from "../api/api"

const GET_MOVIES = 'GET_MOVIES'
const GET_GENRES = 'GET_GENRES'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_CATEGORY = 'SET_CATEGORY'
const GET_VIDEO = 'GET_VIDEO'
const SET_MOVIE_ID = 'SET_MOVIE_ID'
const SET_QUERY = 'SET_QUERY'
const SET_GENRE = 'SET_GENRE'
const SET_SEARCH = 'SET_SEARCH'


let initialState = {
    movies: [],
    genres: [],
    currentPage: 1,
    category: 'popular',
    video: [],
    videoId: null,
    query: 'веном',
    genre: '',
    search: ''
}

const movieDbReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_MOVIES: {
            return {
                ...state,
                movies: action.movies
            }
        }

        case SET_CATEGORY: {
            return {
                ...state,
                category: action.category
            }
        }

        case GET_VIDEO: {
            return {
                ...state,
                video: action.video
            }
        }

        case SET_MOVIE_ID: {
            return {
                ...state,
                videoId: action.videoId
            }
        }


        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case SET_GENRE: {
            return {
                ...state,
                genre: action.genre
            }
        }

        case GET_GENRES: {
            return {
                ...state,
                genres: action.genres
            }
        }

        case SET_QUERY: {
            return {
                ...state,
                query: action.query
            }
        }

        case SET_SEARCH: {
            return {
                ...state,
                search: action.search
            }
        }

        default:
            return state
    }
}


export const getMoviesActionCreator = (movies) => ({type: GET_MOVIES, movies})
export const getGenresActionCreator = (genres) => ({type: GET_GENRES, genres})
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setCategoryActionCreator = (category) => ({type: SET_CATEGORY, category})
export const setVideoActionCreator = (video) => ({type: GET_VIDEO, video})
export const setMovieIdActionCreator = (videoId) => ({type: SET_MOVIE_ID, videoId})
export const setQueryActionCreator = (query) => ({type: SET_QUERY, query})
export const setGenreActionCreator = (genre) => ({type: SET_GENRE, genre})
export const setSearchActionCreator = (search) => ({type: SET_SEARCH, search})


export const getMovies = (currentPage, category, genre) => {
    return async (dispatch) => {
        dispatch(setGenreActionCreator(genre))
        dispatch(setCategoryActionCreator(category))
        dispatch(setCurrentPageActionCreator(currentPage))
        let data = await TMDbAPI.getMovies(currentPage, category, genre)
        dispatch(getMoviesActionCreator(data))
    }
}

export const getGenres = () => {
    return async (dispatch) => {
        let data = await TMDbAPI.getGenres()
        dispatch(getGenresActionCreator(data))
    }
}

export const getVideo = (videoId) => {
    return async (dispatch) => {
        dispatch(setMovieIdActionCreator(videoId))
        let data = await TMDbAPI.getVideo(videoId)
        dispatch(setVideoActionCreator(data.results))
    }
}

export const searchVideo = (currentPage, query, search) => {
    return async (dispatch) => {
        dispatch(setQueryActionCreator(query))
        dispatch(setCurrentPageActionCreator(currentPage))
        let data = await TMDbAPI.searchVideo(currentPage, query)
        dispatch(getMoviesActionCreator(data))
    }
}

export const setSearch = (search) => {
    return (dispatch) => {
        dispatch(setSearchActionCreator(search))
    }
}

export default movieDbReducer