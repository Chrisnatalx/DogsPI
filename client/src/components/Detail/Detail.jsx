import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import './Detail.css'
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
        <div className='Detail'>
            <div className='Container-info'>
                <h2>Id: {dog.id}</h2>
                <h2>Breed: {dog.name}</h2>
                <h5>Temperaments: {dog.temperament}</h5>
                <h5>Weight: {dog.weight}</h5>
                <h5>Height: {dog.height}</h5>
                <h5>Origin: {dog.origin}</h5>
                <h5>Life span: {dog.life_span}</h5>
                <NavLink to='/home'>
                    <button>Back</button>
                </NavLink>
            </div>
            <div className='Image'>
                <img src={dog.image} alt={dog.name} style={{ width: '600px', height: '600px' }} />
            </div>

        </div>




    )
}
