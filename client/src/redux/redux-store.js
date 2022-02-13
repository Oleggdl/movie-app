import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
import movieDbReducer from "./movieDb-reducer";

let reducers = combineReducers({
    movieDbReducer: movieDbReducer
})


const store = createStore(
    reducers,
    applyMiddleware(thunk))

export default store