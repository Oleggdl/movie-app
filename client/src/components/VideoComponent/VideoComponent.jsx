import React from 'react'
import {CloseOutlined} from "@ant-design/icons"
import './VideoComponent.scss'

const VideoComponent = ({videoPlay, isVideoExist, videoKey, setVideoPlay}) => {

    const closeVideoStyle = {
        fontSize: '20px', color: '#ffffff', cursor: 'pointer',
        position: 'absolute', zIndex: 10, right: '10px', top: '10px'
    }

    const isVideoClose = () => {
        setVideoPlay(false)
    }

    return (
        <>
            {videoPlay && isVideoExist && <div className="videoContainer">
                <iframe className="frameVideo" src={`https://www.youtube.com/embed/${videoKey}`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>video
                </iframe>
                <div><CloseOutlined style={closeVideoStyle} onClick={isVideoClose}/></div>
            </div>}
        </>
    )
}

export default VideoComponent