import React from 'react'
import {Select} from "antd"
import genresList from "../../utils/genres"
import './Navigation.scss'
import {CloseOutlined} from "@ant-design/icons";

const Navigation = ({onSetGenre, onSetCategory, isBurgerMenu, closeBurgerMenu}) => {

    const options = genresList

    return (
        <>
            <nav className="categoryNav">
                <button className="btnNav" onClick={e => onSetCategory(e.target.value)}
                        value={'popular'}>Trending
                </button>
                <button className="btnNav" onClick={e => onSetCategory(e.target.value)}
                        value={'top_rated'}>Top Rated
                </button>
                <button className="btnNav" onClick={e => onSetCategory(e.target.value)}
                        value={'upcoming'}>Coming Soon
                </button>
                <Select className="select" mode="multiple" placeholder="Select genre" options={options} showArrow
                        style={{minWidth: '200px', maxWidth: '700px'}}
                        onChange={e => onSetGenre(e.join(', '))}>Genre</Select>
            </nav>
            {isBurgerMenu && <nav className="burgerNav">
                <ul>
                    <li className="burgerCloseContainer">
                        <button className="btnNav" onClick={e => onSetCategory(e.target.value)}
                                value={'popular'}>Trending
                        </button>
                        <div><CloseOutlined className="burgerClose" onClick={closeBurgerMenu}/></div>
                    </li>
                    <li>
                        <button className="btnNav" onClick={e => onSetCategory(e.target.value)}
                                value={'top_rated'}>Top Rated
                        </button>
                    </li>
                    <li>
                        <button className="btnNav" onClick={e => onSetCategory(e.target.value)}
                                value={'upcoming'}>Coming Soon
                        </button>
                    </li>
                    <li><Select className="select" mode="multiple" placeholder="Select genre" options={options}
                                showArrow
                                style={{minWidth: '200px', maxWidth: '700px'}}
                                onChange={e => onSetGenre(e.join(', '))}>Genre</Select></li>
                </ul>
            </nav>}
        </>
    )
}

export default Navigation