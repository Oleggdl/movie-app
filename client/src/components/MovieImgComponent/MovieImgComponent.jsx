import React from 'react'
import {Button} from "antd"
import './MovieImgComponent.scss'

const MovieImgComponent = ({isViewInfo, setVideoKeyHandler, setIsViewInfo, baseUrl, countsWindowsDescriptions,
                               imgPath, setCountsWindowsDescriptions}) => {




    const onViewInfo = () => {
        if (countsWindowsDescriptions > 0) {
            setIsViewInfo(false)
            setCountsWindowsDescriptions(0)
        } else {
            setIsViewInfo(true)
        }

        setVideoKeyHandler()
        setCountsWindowsDescriptions(countsWindowsDescriptions + 1)
    }

    return (
        <>
            <div className="movieImg">
                {!isViewInfo && <div className="opacityImg">
                    <Button onClick={() => {
                        onViewInfo()
                        // setIsViewInfo(true)
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