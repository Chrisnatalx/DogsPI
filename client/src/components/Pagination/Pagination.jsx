import React from 'react'
import './Pagination.css'
export const Pagination = ({ page, setPage }) => {
    const decrementHandler = () => {
        setPage(page - 1)
    }
    const incrementHandler = () => {
        setPage(page + 1)
    }

    return (
        <div className='Pagination'>
            <button onClick={decrementHandler} disabled={page === 0 ? true : false}>Previous</button>
            <p>{page}</p>
            <button onClick={incrementHandler} disabled={page === 21 ? true : false}>Next</button>
        </div>
    )
}
