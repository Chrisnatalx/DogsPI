import React, { useEffect } from 'react'
import { Cards } from '../Cards/Cards'
import { useState } from 'react'
import axios from 'axios'
import { Pagination } from '../Pagination/Pagination'
import './Home.css'

export const Home = () => {
    const [dogs, setDogs] = useState([])
    const [page, setPage] = useState(0)
    const [inputValue, setInputValue] = useState('')
    const getDogs = async () => {

        const url = `http://localhost:3001/dogs?name=${inputValue}&page=${page}`
        const { data } = await axios.get(url)
        data ? setDogs(data) : null
    }
    const handlerChange = (e) => {
        setInputValue(e.target.value)
    }

    useEffect(() => {
        getDogs()
    }, [page, inputValue])
    return (
        <>
            <div className='input' >

                <input type="text" placeholder='Bulldog...' onChange={handlerChange} value={inputValue} />
            </div>
            <Cards dogs={dogs} />
            <Pagination page={page} setPage={setPage} />
        </>
    )
}
