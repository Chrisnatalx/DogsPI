import React from 'react'

export const Pagination = ({ page, setPage }) => {
    const decrementHandler = () => {
        setPage(page - 1)
    }
    const incrementHandler = () => {
        setPage(page + 1)
    }

    return (
        <div>
            <button onClick={decrementHandler}>Previous</button>
            <p>{ }</p>
            <button onClick={incrementHandler}>Next</button>
        </div>
    )
}
