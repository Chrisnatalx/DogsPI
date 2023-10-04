import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'
export const Card = ({ dog }) => {

    const navigate = useNavigate()

    function navigateHandler() {
        navigate(`/detail/${dog.id}`);
    }
    return (
        <div className='Container-Card'>

            <h2>{dog.name}</h2>
            <h5> Temperaments: {dog.temperament}</h5>
            <h5>Weight: {dog.weight} Kg.</h5>
            <img src={dog.image} alt={dog.name} style={{ width: '200px', height: '150px' }} />
            <button onClick={navigateHandler}>More details</button>

        </div>
    )
}
