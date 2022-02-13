import axios from "axios"

const apiKey = '326dd789e3891bdd85acbe42b7263d71'
const language = 'ru'

const instance = axios.create({
    withCredentials: false,
    baseURL: `https://api.themoviedb.org/3/`,
})

export const TMDbAPI = {
    getMovies(currentPage, category, genre) {
        return instance.get(
            `movie/${category}?api_key=${apiKey}&language=${language}&page=${currentPage}&with_genres=${genre}`)
            .then(response => response.data)
    },

    getGenres() {
        return instance.get(`genre/movie/list?api_key=${apiKey}&language=${language}`)
            .then(response => response.data)
    },

    getVideo(videoId) {
        return instance.get(`movie/${videoId}/videos?api_key=${apiKey}&language=${language}`)
            .then(response => response.data)
    },

    searchVideo(currentPage, query) {
        return instance.get(
            `search/movie?api_key=${apiKey}&language=${language}&query=${query}&page=${currentPage}`)
            .then(response => response.data)
    }
}