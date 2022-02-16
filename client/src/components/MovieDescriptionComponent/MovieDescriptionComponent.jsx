import React, {useState} from 'react'
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
                    <Button onClick={() => {
                        buttonVideoHandler()
                        isDescriptionClose()
                    }
                    } type="primary">Watch Now</Button>
                </div>}
                <h2>{title}</h2>
                <div className="voteAverage">{voteAverage}</div>
                <p className="genre">{genresArray.join(', ')}</p>
            </div>
        </>
    )
}

export default MovieDescriptionComponent