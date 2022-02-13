import React, {useState} from 'react'
import './MovieElement.scss'
import {CloseOutlined} from "@ant-design/icons"
import {Button, message} from "antd";


const MovieElement = ({movieId, genres, movies, onGetVideo, video}) => {

    const movieID = movieId
    const genresArray = []


    for (let genreID of genres.length !== 0 ? genres.genres : []) {
        for (let genre of movies.results[movieID].genre_ids) {
            if (genre === genreID.id) {
                genresArray.push(genreID.name)
            }
        }
    }

    const [isVideoExist, setIsVideoExist] = useState(false)

    let baseUrl, imgPath, title, voteAverage, overview
    if (movies.length !== 0) {
        baseUrl = movies.results[movieID]
        imgPath = `https://image.tmdb.org/t/p/w185${baseUrl.poster_path}`
        title = baseUrl.title
        voteAverage = baseUrl.vote_average
        overview = baseUrl.overview
    }

    const [isViewInfo, setIsViewInfo] = useState(false)


    const onViewInfo = () => {
        setIsViewInfo(true)
    }
    const isDescriptionClose = () => {
        setIsViewInfo(false)
    }

    const isVideoClose = () => {
        setVideoPlay(false)
    }

    const closeOutlinedStyle = {fontSize: '20px', color: '#ffffff', cursor: 'pointer'}
    const closeVideoStyle = {
        fontSize: '20px', color: '#ffffff', cursor: 'pointer',
        position: 'absolute', zIndex: 10, right: '10px', top: '10px'
    }

    const [videoPlay, setVideoPlay] = useState(false)

    const onVideo = () => {
        setVideoKey(video.length !== 0 ? video[0].key : [])
        setVideoPlay(true)
    }

    const [videoKey, setVideoKey] = useState('')

    const buttonVideoHandler = () => {
        setVideoKeyHandler()
        const videoId = movies.results[movieID].id
        onGetVideo(videoId)
        video.length === 0 ? info() : setIsVideoExist(true)
        onVideo()
    }

    const setVideoKeyHandler = () => {
        const videoId = movies.results[movieID].id
        onGetVideo(videoId)
    }

    const info = () => {
        message.info({content: 'No trailer found for this movie',
            className: "videoIsNotExistMessage"})
    }

    return (
        <div className="movieContainer">
            {videoPlay && isVideoExist && <div className="videoContainer">
                <iframe className="frameVideo" src={`https://www.youtube.com/embed/${videoKey}`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>video
                </iframe>
                <div><CloseOutlined style={closeVideoStyle} onClick={isVideoClose}/></div>
            </div>}

            <div className="movieImg">
                {!isViewInfo && <div className="opacityImg">
                    <Button onClick={() => {
                        setVideoKeyHandler()
                        onViewInfo()
                    }}>View Info</Button>
                </div>}
                {baseUrl.poster_path
                    ? <img className="posterImg" src={imgPath} alt="image"/>
                    : <div className="defaultImg">No image</div>}
            </div>

            <div className="descriptionContainer">
                {isViewInfo && <div className="opacityDescription">
                    <CloseOutlined style={closeOutlinedStyle} onClick={isDescriptionClose}/>
                    <p>{overview}</p>
                    <Button onClick={buttonVideoHandler} type="primary">Watch Now</Button>
                </div>}
                <h2>{title}</h2>
                <div className="voteAverage">{voteAverage}</div>
                <div className="genre">{genresArray.join(', ')}</div>
            </div>
        </div>
    )
}

export default MovieElement