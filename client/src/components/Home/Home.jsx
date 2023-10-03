import React, { useEffect } from 'react'
import { Cards } from '../Cards/Cards'
import { useState } from 'react'
import axios from 'axios'

export const Home = () => {
    const [dogs, setDogs] = useState([])
    const getDogs = async () => {
        const url = `http://localhost:3001/dogs`
        const { data } = await axios.get(url)
        data ? setDogs(data) : null
    }

    useEffect(() => {
        getDogs()
    }, [])
    return (
        <Cards dogs={dogs} />
    )
}
