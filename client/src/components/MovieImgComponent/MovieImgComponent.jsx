import React from 'react'
import {Button} from "antd"
import './MovieImgComponent.scss'

const MovieImgComponent = ({isViewInfo, setVideoKeyHandler, setIsViewInfo, baseUrl, imgPath}) => {

    const onViewInfo = () => {
        setIsViewInfo(true)
    }

    return (
        <>
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
        </>
    )
}

export default MovieImgComponent