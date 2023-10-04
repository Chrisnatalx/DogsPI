import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
export const Navbar = () => {


    return (
        <>
            <div className='Container-Nav'>
                <div className='Container-Nav-Items'>
                    <NavLink to='/home'><button>Home</button></NavLink>
                    <NavLink to='/form'><button>CreateDog</button></NavLink>
                </div>

            </div>
        </>
    )
}
