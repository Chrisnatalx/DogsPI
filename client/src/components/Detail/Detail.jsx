import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';

export const Detail = () => {

    const [dog, setDog] = useState([])

    const { id } = useParams();
    const getDogById = async () => {
        const url = `http://localhost:3001/dogs/${id}`
        const { data } = await axios.get(url)
        data ? setDog(data) : null
    }
    useEffect(() => {
        getDogById()
    }, [])
    return (
        <div>
            <h2>Id: 1</h2>
            <h2>Breed: {dog.name}</h2>
            <h5>Temperaments: {dog.temperament}</h5>
            <h5>Weight: {dog.weight}</h5>
            <h5>Height: {dog.height}</h5>
            <h5>Origin: {dog.origin}</h5>
            <h5>Life span: {dog.life_span}</h5>
            <img src={dog.image} alt={dog.name} style={{ width: '200px', height: '150px' }} />

            <NavLink to='/home'>
                <button>Back</button>
            </NavLink>
        </div>

    )
}
