import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./redux/redux-store"
import MovieDetailsPageContainer from "./pages/SearchResultsPage/SearchResultsPageContainer"


function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="container">
                    <Routes>
                        <Route path={'/'} exact element={<MovieDetailsPageContainer/>}/>
                    </Routes>
                </div>
            </Provider>
        </BrowserRouter>
    )
}

export default App
