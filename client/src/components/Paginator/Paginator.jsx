import React, {memo, useState} from "react"
import './Paginator.scss'

const Paginator = memo(({total, pageSize, onPageChange, portionSize = 10, currentPage,
                            setIsDescriptionForPagination}) => {

    let pagesCount = Math.ceil(total / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    const leftButtonHandler = () => {
        setPortionNumber(portionNumber - 1)
    }

    const rightButtonHandler = () => {
        setPortionNumber(portionNumber + 1)
    }

    return <div className="paginator">

        {portionNumber > 1
            ? <button className="buttonPaginator" onClick={leftButtonHandler}>PREV</button>
            : <button className="buttonPaginator disabled" onClick={leftButtonHandler}>PREV</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) =>currentPage === p
                ? <div className="onePage currentPage" key={p} onClick={e => {
                    onPageChange(p)
                    setIsDescriptionForPagination(true)
                }}>{p}</div>
                : <div className="onePage" key={p} onClick={e => {
                    onPageChange(p)
                    setIsDescriptionForPagination(true)
                }}>{p}</div>)}

        {portionCount > portionNumber
            ? <button className="buttonPaginator" onClick={rightButtonHandler}>NEXT</button>
            : <button className="buttonPaginator disabled" onClick={rightButtonHandler}>NEXT</button>}

    </div>
})
export default Paginator