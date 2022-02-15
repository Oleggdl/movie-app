import React from 'react'
import {CloseOutlined} from "@ant-design/icons"
import {Button} from "antd"
import './MovieDescriptionComponent.scss'

const MovieDescriptionComponent = ({isViewInfo, setIsViewInfo, overview,
                                       buttonVideoHandler, title, voteAverage, genresArray}) => {

    const closeOutlinedStyle = {fontSize: '20px', color: '#ffffff', cursor: 'pointer'}

    const isDescriptionClose = () => {
        setIsViewInfo(false)
    }

    return (
        <>
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
        </>
    )
}

export default MovieDescriptionComponent