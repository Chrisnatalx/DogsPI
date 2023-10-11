import React from 'react'
import './LandingPage.css'
import { NavLink } from 'react-router-dom'
export const LandingPage = () => {
    return (
        <div className='Container-landing'>
            <h1>Welcome to DogsPage</h1>
            <p>In this application you will be able to find information about many dogs!</p>
            <NavLink to='/home'> <button>Let's go</button></NavLink>

        </div>
    )
}
