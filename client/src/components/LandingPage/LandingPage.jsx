import React from 'react'
import './LandingPage.css'
import { NavLink } from 'react-router-dom'
export const LandingPage = () => {
    return (
        <div className='Container-landing'>
            <h1>Bienvenidos a DogsPage</h1>
            <p>En esta aplicacion vas a poder encontrar información de muchos perros!</p>
            <NavLink to='/home'> <button>Ingresar</button></NavLink>

        </div>
    )
}
