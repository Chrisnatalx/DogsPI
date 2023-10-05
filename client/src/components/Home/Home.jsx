import React, { useEffect } from 'react'
import { Cards } from '../cards/Cards'
import { useState } from 'react'
import axios from 'axios'
import { Pagination } from '../pagination/Pagination'
import './Home.css'

export const Home = () => {
    const [dogs, setDogs] = useState([])
    const [page, setPage] = useState(0)
    const [name, setName] = useState('')
    const getDogs = async () => {

        const url = `http://localhost:3001/dogs?name=${name}&page=${page}`
        const { data } = await axios.get(url)
        data ? setDogs(data) : null
    }
    const handlerChange = (e) => {
        setName(e.target.value)
    }

    useEffect(() => {
        getDogs()
    }, [name, page])
    return (
        <>
            <div className='input' >
                <input type="text" placeholder='Bulldog...' onChange={handlerChange} value={name} />
            </div>
            <Cards dogs={dogs} />
            <Pagination page={page} setPage={setPage} />
        </>
    )
}
