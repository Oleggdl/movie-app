import React, {useEffect} from 'react'
import {Button} from "antd"
import './MovieImgComponent.scss'

const MovieImgComponent = ({isViewInfo, setVideoKeyHandler, setIsViewInfo, baseUrl, countsWindowsDescriptions,
                               imgPath, setCountsWindowsDescriptions, setVideoPlay , isDescriptionForPagination,
                           setIsDescriptionForPagination}) => {

    useEffect(() => {
       if (countsWindowsDescriptions > 0) {
           setIsViewInfo(false)
           setVideoPlay(false)
           setCountsWindowsDescriptions(0)
       }
       if (!!isDescriptionForPagination) {
           setVideoPlay(false)
           setIsViewInfo(false)
       }
    }, [countsWindowsDescriptions, isDescriptionForPagination])

    const onViewInfo = () => {
        setTimeout(() => {
            setIsViewInfo(true)
            setIsDescriptionForPagination(false)
        }, 1)

        setVideoKeyHandler()
        setCountsWindowsDescriptions(countsWindowsDescriptions + 1)
    }

    return (
        <>
            <div className="movieImg">
                {!isViewInfo && <div className="opacityImg">
                    <Button onClick={onViewInfo}>View Info</Button>
                </div>}
                {baseUrl.poster_path
                    ? <img className="posterImg" src={imgPath} alt="image"/>
                    : <div className="defaultImg">No image</div>}
            </div>
        </>
    )
}

export default MovieImgComponent