import React, {useState} from 'react'
import './MovieElement.scss'
import {message} from "antd"
import VideoComponent from "../VideoComponent/VideoComponent"
import MovieImgComponent from "../MovieImgComponent/MovieImgComponent"
import MovieDescriptionComponent from "../MovieDescriptionComponent/MovieDescriptionComponent"


const MovieElement = ({movieId, genres, movies, onGetVideo, video, countsWindowsDescriptions,
                          setCountsWindowsDescriptions}) => {

    const movieID = movieId
    const genresArray = []

    const [isVideoExist, setIsVideoExist] = useState(false)
    const [isViewInfo, setIsViewInfo] = useState(false)
    const [videoPlay, setVideoPlay] = useState(false)
    const [videoKey, setVideoKey] = useState('')


    for (let genreID of genres.length !== 0 ? genres.genres : []) {
        for (let genre of movies.results[movieID].genre_ids) {
            if (genre === genreID.id) {
                genresArray.push(genreID.name)
            }
        }
    }

    let baseUrl, imgPath, title, voteAverage, overview
    if (movies.length !== 0) {
        baseUrl = movies.results[movieID]
        imgPath = `https://image.tmdb.org/t/p/w185${baseUrl.poster_path}`
        title = baseUrl.title
        voteAverage = baseUrl.vote_average
        overview = baseUrl.overview
    }

    const setVideoKeyHandler = () => {
        const videoId = movies.results[movieID].id
        onGetVideo(videoId)
    }

    const info = () => {
        message.info({
            content: 'No trailer found for this movie',
            className: "videoIsNotExistMessage"
        })
    }

    const onVideo = () => {
        setVideoKey(video.length !== 0 ? video[0].key : [])
        setVideoPlay(true)
    }

    const buttonVideoHandler = () => {
        setVideoKeyHandler()
        const videoId = movies.results[movieID].id
        onGetVideo(videoId)
        video.length === 0 ? info() : setIsVideoExist(true)
        onVideo()
    }

    return (
        <div className="movieContainer">
            <VideoComponent isVideoExist={isVideoExist} videoKey={videoKey} videoPlay={videoPlay}
                            setVideoPlay={setVideoPlay}/>

            <MovieImgComponent baseUrl={baseUrl} imgPath={imgPath} isViewInfo={isViewInfo}
                               setIsViewInfo={setIsViewInfo} setVideoKeyHandler={setVideoKeyHandler}
                               setCountsWindowsDescriptions={setCountsWindowsDescriptions}
                               countsWindowsDescriptions={countsWindowsDescriptions}/>

            <MovieDescriptionComponent isViewInfo={isViewInfo} voteAverage={voteAverage} title={title}
                                       buttonVideoHandler={buttonVideoHandler} genresArray={genresArray}
                                       setIsViewInfo={setIsViewInfo} overview={overview}/>
        </div>
    )
}

export default MovieElement