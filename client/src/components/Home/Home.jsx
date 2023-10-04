import React, { useEffect } from 'react'
import { Cards } from '../Cards/Cards'
import { useState } from 'react'
import axios from 'axios'
import { Pagination } from '../Pagination/Pagination'

export const Home = () => {
    const [dogs, setDogs] = useState([])
    const [page, setPage] = useState(1)
    const getDogs = async () => {
        const url = `http://localhost:3001/dogs?page=${page}`
        const { data } = await axios.get(url)
        data ? setDogs(data) : null
    }

    useEffect(() => {
        getDogs()
    }, [page])
    return (
        <>
            <Cards dogs={dogs} />
            <Pagination page={page} setPage={setPage} />
        </>
    )
}
